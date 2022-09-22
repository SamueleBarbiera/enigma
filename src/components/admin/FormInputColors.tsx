import { ColorSchema } from '@/pages/admin/Add'
import { useFormContext } from 'react-hook-form'
import { TypeOf } from 'zod'

type Colors = TypeOf<typeof ColorSchema>

interface FormInputProps {
    label: string
    name: string
    options: Colors[]
}

const FormInputCOlors = ({ label, name, options }: FormInputProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    return (
        <div className="">
            <label htmlFor={name} className="text-ct-blue-600 mb-3 block">
                {label}
            </label>
            <div className="grid grid-cols-4 gap-4">
                {' '}
                {options.map((singleName) => {
                    return (
                        <>
                            <label className="label cursor-pointer">
                                {' '}
                                <span className="label-text">{singleName}</span>
                                <input
                                    type={'checkbox'}
                                    className={`bg-${singleName} relative inline-flex h-6 w-6  items-center rounded-lg`}
                                    {...register(name)}
                                />
                            </label>
                        </>
                    )
                })}
            </div>
            {errors[name] && <span className="block pt-1 text-xs text-red-500">{errors[name]?.message as string}</span>}
        </div>
    )
}

export default FormInputCOlors
