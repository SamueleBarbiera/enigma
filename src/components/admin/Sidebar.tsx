/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useRouter } from 'next/router'
import { PhotographIcon, UserGroupIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Sidebar() {
    const location = useRouter()

    const navigation = [
        { name: 'Prodotti', href: 'crea', path: '/admin/aggiungiProd', icon: PhotographIcon },
        { name: 'Utenti', href: 'utenti', path: '/admin/utenti', icon: UserGroupIcon },
        { name: 'Categorie', href: 'prodotti', path: '/admin/prodotti', icon: UserGroupIcon },
        { name: 'Categorie', href: 'categorie', path: '/admin/categorie', icon: UserGroupIcon },
    ]

    return (
        <div
            className={`relative hidden h-screen w-60 border-r border-gray-200 bg-gray-100 p-5 duration-300 dark:border-gray-600 dark:bg-slate-800 sm:block`}
        >
            <Link href="/">
                <div className={`flex items-center gap-x-4`}>
                    <span className="whitespace-nowrap text-xl font-medium dark:text-white">Admin dashboard</span>
                </div>
            </Link>

            <ul className="pt-6">
                {navigation.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <li
                            className={`flex cursor-pointer items-center gap-x-6 rounded-lg p-3 text-base font-normal hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700
                        ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            <menu.icon className={'h-6 w-6 text-white group-hover:text-white'} aria-hidden="true" />
                            <span className={`origin-left duration-300 hover:block`}>{menu.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
