import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import FormInput from '../../components/admin/FormInput'
import { ButtonForm } from '../../components/admin/LoadingButton'
import toast from 'react-hot-toast'
import { trpc } from '../../content/utils/trpc'
import FileUpLoader from '../../components/admin/FileUpload'
import Layout from '@/components/admin/Layout'
import { UseFormProps } from 'react-hook-form/dist/types'
import { TypeOf, z } from 'zod'
import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

export const validationSchema = z.object({
    image: z.string().min(1, 'Photo is required').url('Photo URL is invalid').array(),
    name: z.string().min(2),
    misure: z.string().min(2),
    description: z.string().min(2),
    price: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().positive().min(1)),
    quantity: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().positive().min(1)),
    design: z.string().min(2),
    material: z.string().min(2),
})

export type AddProductInput = TypeOf<typeof validationSchema>

function useZodForm<TSchema extends z.ZodType>(
    props: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
        schema: TSchema
    }
) {
    const form = useForm<TSchema['_input']>({
        ...props,
        resolver: zodResolver(props.schema, undefined, {
            // This makes it so we can use `.transform()`s on the schema without same transform getting applied again when it reaches the server
            rawValues: true,
        }),
    })

    return form
}

const AddProductPage = () => {
    const [isLoading, setisLoading] = useState<boolean>(false)

    const { mutate: MutationOn } = trpc.useMutation(['createProduct.add'], {
        onError: (error) => {
            toast.error(error.message, {
                position: 'top-right',
            })
        },
    })

    const methods = useZodForm({
        schema: validationSchema,
        defaultValues: {
            image: [''],
            description: '',
            price: 1,
            quantity: 1,
            design: '',
            misure: '',
            material: '',
            name: '',
        },
    })

    const {
        reset,
        handleSubmit,
        formState: { isSubmitSuccessful },
    } = methods

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful])

    const handleOnSubmit = async (values: {
        image: string[]
        name: string
        misure: string
        description: string
        price: number
        quantity: number
        design: string
        material: string
    }) => {
        let toastId
        try {
            toastId = toast.loading('Caricamento del prodotto...')
            setisLoading(true)
            MutationOn(values)
        } catch (err) {
            setisLoading(true)
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            toast.error(`Unable to submit ${message}`, { id: toastId })
        } finally {
            setisLoading(false)

            toast.success('Prodotto pubblicato', { id: toastId })
        }
    }

    return (
        <Layout>
            <div className="flex h-full flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Add a product</h2>
                <section className="bg-ct-blue-600 grid min-h-screen place-items-center py-8">
                    <div className="w-full">
                        <FormProvider {...methods}>
                            <form
                                onSubmit={handleSubmit(handleOnSubmit)}
                                className="bg-ct-dark-200 mx-auto w-full max-w-md space-y-5 overflow-hidden rounded-2xl p-8 shadow-lg"
                            >
                                <FormInput label="Nome" name="name" type="text" />
                                <FormInput label="Misure" name="misure" type="text" />
                                <FormInput label="Descrizione" name="description" type="text" />
                                <FormInput label="Prezzo" name="price" type="number" />
                                <FormInput label="Quantità" name="quantity" type="number" />
                                <FormInput label="Design" name="design" type="text" />
                                <FormInput label="Materiale" name="material" type="text" />
                                <FileUpLoader name="image" />
                                <ButtonForm loading={isLoading} textColor="text-ct-blue-600">
                                    {isLoading ? 'Loading' : 'Submit'}
                                </ButtonForm>
                            </form>
                        </FormProvider>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AddProductPage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    console.log('🚀 ~ file: prodotti.tsx ~ line 259 ~ getServerSideProps ~ session', session)

    if (!session || session.user.role != 'ADMIN') {
        return { redirect: { permanent: false, destination: '/' } }
    }

    return {
        props: { session: session },
    }
}
