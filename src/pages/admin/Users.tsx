import Layout from '@/components/admin/Layout'
import { User } from '@prisma/client'
import { TrashIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { trpc } from '../../content/utils/trpc'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { unstable_getServerSession, Session } from 'next-auth'

export default function Users() {
    const utils = trpc.useContext()
    const query = trpc.useQuery(['users.view'], { suspense: true })
    const users = query.data
    const deleteUser = trpc.useMutation(['users.delete'], {
        async onSuccess() {
            // refetches users after a user is deleted
            await utils.invalidateQueries(['users.view'])
        },
    })
    const querySession = trpc.useQuery(['auth.next-auth.getSession'], { suspense: true })
    const getMe = querySession.data

    console.log('🚀 ~ file: Users.tsx ~ line 66 ~ Contact ~ users', users)

    return (
        <Layout>
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ruolo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user: User) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <article className="prose overflow-hidden bg-white p-4 shadow sm:rounded-lg">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <Image layout="fill" src={user.image ?? ''} alt="Avatar Utente" />
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{user.name}</div>
                                </td>
                                <td>
                                    <div className="text-sm opacity-50">{user.email}</div>
                                </td>

                                <td>
                                    <div className="text-sm opacity-50">{user.role}</div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                    {user.email != getMe?.email ? (
                                        <button
                                            className="btn gap-2"
                                            onClick={() =>
                                                deleteUser.mutate({
                                                    id: user.id,
                                                })
                                            }
                                        >
                                            Elimina
                                            <TrashIcon className="h-5 w-5 text-red-600" />
                                        </button>
                                    ) : null}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ruolo</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session: Session | null = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    console.log('🚀 ~ file: prodotti.tsx ~ line 259 ~ getServerSideProps ~ session', session)

    if (!session || session.user.role != 'ADMIN') {
        return { redirect: { permanent: false, destination: '/' } }
    }

    return {
        props: { session: session },
    }
}
