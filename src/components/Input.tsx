import { FieldHookConfig, useField } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface Props {
    type: string
    label: string
    className: string
    placeholder: string
    disabled: object
    rows: number
    min: string
    name: string
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Input = ({ type = '', label = '', className = '', name = '' }: Props) => {
    const props: string | FieldHookConfig<unknown> = { type, name, className }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [field, meta] = useField(props)
    const error = meta.touched && meta.error

    return (
        <div className={classNames(className, 'flex flex-col space-y-1')}>
            {label ? (
                <label htmlFor="email" className="text-gray-600">
                    {label}
                </label>
            ) : null}

            <div className="flex-1">
                {type === 'textarea' ? (
                    <textarea
                        className={classNames(
                            'w-full truncate rounded-md border py-2 pl-4 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50',
                            error ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400' : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
                        )}
                    />
                ) : (
                    <div className="relative">
                        <input
                            type={type}
                            className={classNames(
                                'w-full truncate rounded-md border py-2 pl-4 shadow-sm transition focus:outline-none focus:ring-4 focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50',
                                error ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400' : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
                            )}
                        />
                        {error && type !== 'number' ? (
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                                <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                            </span>
                        ) : null}
                    </div>
                )}
            </div>

            {error ? <p className="text-sm text-red-600 first-letter:uppercase">{error}</p> : null}
        </div>
    )
}

export default Input
