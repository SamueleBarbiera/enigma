import { RiInstagramLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'

const footerNavigation = {
    bottomLinks: [
        { name: 'Facebook', href: '#', image: <TiSocialFacebook className="-mt-[0.1rem] h-[1.9rem] w-8" aria-hidden="true" /> },
        { name: 'Instagram', href: '#', image: <RiInstagramLine className="mt-[0.04rem] h-[1.7rem] w-8" aria-hidden="true" /> },
        { name: 'Whatsapp', href: '#', image: <AiOutlineWhatsApp className="ml-[0.2rem] h-[1.7rem] w-8" aria-hidden="true" /> },
    ],
}

export default function Footer() {
    return (
        <>
            <footer className="h-fit w-screen bg-beige-200 px-8 z-100">
                    <div className="h-4 items-center py-10 md:flex md:justify-between">
                        <Socials />
                        <div className="hidden md:flex md:text-left">
                            <p className="font-medium text-beige-900">Enigma Moda 2022 🤎</p>
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
