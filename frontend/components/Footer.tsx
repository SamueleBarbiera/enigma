import { RiInstagramLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'

const footerNavigation = {
    bottomLinks: [
        { name: 'Facebook', href: '#', image: <TiSocialFacebook className="-mt-[0.05rem] h-6 w-7" aria-hidden="true" /> },
        { name: 'Instagram', href: '#', image: <RiInstagramLine className="mt-[0.05rem] h-[1.35rem] w-6" aria-hidden="true" /> },
        { name: 'Whatsapp', href: '#', image: <AiOutlineWhatsApp className="ml-[0.2rem] mt-[0.05rem] h-[1.35rem] w-6" aria-hidden="true" /> },
    ],
}

export default function Footer() {
    return (
        <>
            <footer className="h-min bg-beige-200">
                <div className="mx-auto h-min max-w-7xl px-8">
                    <div className="h-4 items-center py-10 md:flex md:justify-between">
                        <Socials />
                        <div className="hidden md:flex md:text-left">
                            <p className="text-medium text-beige-900">&copy; Enigma Moda 2022</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

function Socials() {
    return (
        <div className="-mt-[0.6rem] flex items-center justify-center md:mt-1">
            <div className="mb-1 flex space-x-1">
                {footerNavigation.bottomLinks.map((item) => (
                    <a key={item.name} href={item.href} className="text-beige-900 hover:text-beige-700">
                        {item.image}
                    </a>
                ))}
            </div>
        </div>
    )
}
