import Header from '../components/page/Header'
import Footer from '../components/page/Footer'
import { CheckIcon } from '@heroicons/react/solid'

function CancelPagamento() {
    return (
        <>
            <Header />
            <main className="h-screen">
                <div className="mx-auto w-fit rounded-lg bg-green-200 py-4 px-4 shadow-xl">
                    <h2 className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <CheckIcon className="m-2 h-12 w-12 flex-shrink-0 rounded-full bg-green-100 py-2 text-green-600 " />
                        <span>Ordine annulato!</span>
                    </h2>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CancelPagamento
