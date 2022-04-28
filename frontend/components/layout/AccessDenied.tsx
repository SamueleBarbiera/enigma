import { FcLock } from 'react-icons/fc'
import { CgArrowDown } from 'react-icons/cg'
import Head from 'next/head'
function AccessDenied() {
    return (
        <>
            <Head>
                <title>🔐 403  🔐</title>
                <a rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <div className="flex h-screen w-screen  items-center justify-center bg-red-100 ">
                <div className="flex flex-col items-center justify-center space-x-1 text-center text-4xl">
                    <FcLock className="mt-3 h-24 w-24 flex-shrink-0 animate-bounce text-red-600" />
                    <p className="m-4 mt-3 text-5xl  font-bold text-red-900">403 FORBIDDEN</p>
                    <p className="m-4 mx-4 mt-3 w-64 text-3xl font-semibold  text-red-500 md:w-120">Non puoi visualizzare questa pagina se non accedi con il tuo account!</p>
                    <CgArrowDown className="h-12 w-12 flex-shrink-0  text-red-900" />
                    <a href="/auth/Login" className="mt-3 rounded-lg bg-red-300 p-2 text-xl font-bold text-gray-900 transition duration-200 ease-in-out hover:bg-red-400">
                        ACCEDI
                    </a>
                </div>
            </div>
        </>
    )
}

export default AccessDenied
