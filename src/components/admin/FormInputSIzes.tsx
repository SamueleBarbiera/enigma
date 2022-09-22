import { useFormContext } from 'react-hook-form'

interface FormInputProps {
    label: string
    name: string
    data: string[]
}

const FormInputSIzes = ({ label, name, data }: FormInputProps) => {
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
                {data.map((singleName) => {
                    return (
                        <>
                            <label className="label cursor-pointer">
                                {' '}
                                <span className="label-text">{singleName}</span>
                                <input key={singleName} type={'checkbox'} className="toggle " {...register(name)} />
                            </label>
                        </>
                    )
                })}
            </div>
            {errors[name] && <span className="block pt-1 text-xs text-red-500">{errors[name]?.message as string}</span>}
        </div>
    )
}

export default FormInputSIzes
