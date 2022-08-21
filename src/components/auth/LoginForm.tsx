/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-control-regex */
import { signIn } from 'next-auth/react'
import { Provider, Providers } from 'src/types/Provider'

interface Props {
    providers?: Providers
}

export default function LoginForm({ providers }: Props) {
    console.log('🚀 ~ file: LoginForm.tsx ~ line 12 ~ LoginForm ~ providers', providers)
    return (
        <>
            <div className="flex h-screen flex-col justify-center bg-beige-400 px-6 py-4">
                <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-2xl bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        <h1 className="align-center mx-auto justify-center text-4xl font-semibold">Accedi</h1>
                        <div className="mt-0">
                            <div className="mt-0 grid grid-cols-2 gap-2">
                                {providers &&
                                    Object.values(providers).map((providers: Provider) => (
                                        <div key={providers.name}>
                                            {(() => {
                                                if (providers.name == 'Google') {
                                                    return (
                                                        <button
                                                            className="text-medium inline-flex w-full justify-center  rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 ease-in-out hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn(providers.id)
                                                            }}
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 488 512"
                                                                >
                                                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                } else if (providers.name == 'Facebook') {
                                                    return (
                                                        <button
                                                            disabled
                                                            className="text-medium inline-flex w-full justify-center  rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 ease-in-out hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn(providers.id)
                                                            }}
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 320 512"
                                                                >
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
                        {/*</section>
                        )}*/}
                    </div>
                </div>
            </div>
        </>
    )
}
