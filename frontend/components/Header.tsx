import Image from 'next/image'

const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 1}`
}

export default function Header() {
    return (
        <>
            <header className="mb-12 flex h-min w-full justify-between">
                <div className="flex items-center space-x-6">
                    <a href="/">
                        <Image className="w-full cursor-pointer object-contain" layout="fixed" loader={myLoader} src="/domanda.png" alt="logo" width={50} height={50} />
                    </a>
                    <div className="hidden items-center space-x-5 md:inline-flex">
                        <h3 className="cursor-pointer">About</h3>
                        <h3 className="cursor-pointer">Contact</h3>
                        <h3 className="cursor-pointer rounded-full bg-beige-600 px-4 py-1 text-white">Follow</h3>
                    </div>
                </div>

                <div className="flex items-center space-x-5 text-beige-600">
                    <h3 className="cursor-pointer">Sign In</h3>
                    <h3 className="cursor-pointer rounded-full border border-beige-600 px-4 py-1">Get Started</h3>
                </div>
            </header>
        </>
    )
}
