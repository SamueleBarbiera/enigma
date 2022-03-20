import axios from 'axios'
import { signIn } from 'next-auth/client'
import { useRef, useState, useEffect } from 'react'
import { IoCloseOutline, IoInformationSharp } from 'react-icons/io5'
import { FcCheckmark } from 'react-icons/fc'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export default function LoginForm({ providers }: any) {
    const userRef = useRef(null)
    const errRef = useRef(null)
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        ;(userRef.current as any).focus()
    }, [])

    useEffect(() => {
        setValidEmail(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidName(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, email, matchPwd])

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        const v3 = EMAIL_REGEX.test(email)
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry')
            return
        }
        try {
            const response = await axios.post('http://localhost:1337/auth/local/register', JSON.stringify({ username: user, email: email, password: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            })
            console.log(response?.data)
            console.log(response?.data.jwt)
            console.log(JSON.stringify(response))
            setSuccess(true)
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('')
            setPwd('')
            setMatchPwd('')
        } catch (err) {
            if ((!err as any)?.response) {
                setErrMsg('No Server Response')
            } else if ((err as any).response?.status === 405) {
                setErrMsg('Username Taken')
            } else {
                setErrMsg('Registration Failed')
            }
            ;(errRef.current as any).focus()
        }
    }

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center bg-beige-400 px-4 py-6">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-lg bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        {success ? (
                            <section>
                                <h1>Success!</h1>
                                <p>
                                    <a href="#">Sign In</a>
                                </p>
                            </section>
                        ) : (
                            <section>
                                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen easy-in-out transition duration-300'} aria-live="assertive">
                                    {errMsg}
                                </p>
                                <form onSubmit={handleSubmit} className="flex flex-col">
                                    <label htmlFor="password" className="mb-2 flex flex-auto justify-between">
                                        Email
                                        <FcCheckmark className={validEmail ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validEmail || !email ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder="Inserisci una email valida 🔎"
                                        required
                                        aria-invalid={validEmail ? 'false' : 'true'}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                    <label htmlFor="username" className="mb-2 flex flex-auto justify-between">
                                        Username
                                        <FcCheckmark className={validName ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validName || !user ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        placeholder="Da 4 a 24, [a-z, A-Z, 0-9] 📝"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                        aria-invalid={validName ? 'false' : 'true'}
                                        aria-describedby="uidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />

                                    <label htmlFor="email" className="mb-2 flex flex-auto justify-between">
                                        Password
                                        <FcCheckmark className={validMatch && matchPwd ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validMatch || !matchPwd ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        placeholder="Da 8 a 24, [a-z, A-Z, 0-9] 🔐"
                                        required
                                        aria-invalid={validPwd ? 'false' : 'true'}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />

                                    <label htmlFor="confirm_pwd" className="mb-2 flex flex-auto justify-between">
                                        Confirm Password
                                        <FcCheckmark className={validMatch && matchPwd ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validMatch || !matchPwd ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        placeholder="Uguale alla password inserita ☝️"
                                        required
                                        aria-invalid={validMatch ? 'false' : 'true'}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />

                                    <button
                                        className=" text-medium transiction easy-in-out mt-8 inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                        disabled={!validName || !validPwd ||!validEmail || !validMatch ? true : false}
                                    >
                                        Registrati
                                    </button>
                                </form>
                                <p className="mx-1 mt-4 flex flex-row justify-between">
                                    Ti sei già registrato?
                                    <br />
                                    <span className="line text-beige-900">
                                        {/*put router link here*/}
                                        <Link href="/Login">Sign In</Link>
                                    </span>
                                </p>
                            </section>
                        )}
                        <div className="mt-4">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center border-beige-700">
                                    <div className="w-full border-t border-beige-700" />
                                </div>
                                <div className="text-medium relative flex justify-center">
                                    <span className="bg-beige-100 px-2 text-beige-900">Oppure continua con</span>
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-2">
                                {providers &&
                                    Object.values(providers).map((provider) => (
                                        <div key={(provider as any).name}>
                                            {(() => {
                                                if ((provider as any).name == 'Google') {
                                                    return (
                                                        <button
                                                            className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((provider as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                } else if ((provider as any).name == 'Facebook') {
                                                    return (
                                                        <button
                                                            className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((provider as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
