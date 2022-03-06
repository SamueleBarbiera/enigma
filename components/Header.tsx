import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 1}`
}

export default function Header() {
    return (
        <>
            <header className="w-full h-min flex justify-between mb-12">
                <div className="flex items-center space-x-6">
                    <Link href="/">
                        <Image className="w-full cursor-pointer object-contain" layout="fixed" loader={myLoader} src="/domanda.png" alt="logo" width={50} height={50} />
                    </Link>
                    <div className="hidden items-center space-x-5 md:inline-flex">
                        <h3 className='cursor-pointer'>About</h3>
                        <h3 className='cursor-pointer'>Contact</h3>
                        <h3 className="rounded-full cursor-pointer bg-beige-600 px-4 py-1 text-white">Follow</h3>
                    </div>
                </div>

                <div className="flex items-center space-x-5 text-beige-600">
                    <h3 className='cursor-pointer'>Sign In</h3>
                    <h3 className="rounded-full border cursor-pointer border-beige-600 px-4 py-1">Get Started</h3>
                </div>
            </header>
        </>
    )
}
