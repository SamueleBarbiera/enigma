import { useState, useRef } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { CloudUploadIcon } from '@heroicons/react/outline'

interface Props {
    label: string
    alt: string
    src: string | ArrayBuffer | null
    accept: string
    sizeLimit: number
    onChangePicture: unknown
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const AddProductImage = ({ label = 'Image', src = '', alt = '', accept = '.png, .jpg, .jpeg, .gif .jiff', sizeLimit = 3 * 1024 * 1024, onChangePicture = () => null }: Props) => {
    const pictureRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const [image, setImage] = useState({ src, alt })
    const [updatingPicture, setUpdatingPicture] = useState<boolean>(false)
    const [pictureError, setPictureError] = useState<string>('')

    const handleOnChangePicture = (e: React.FormEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files
        const file = files !== null ? files[0] : null
        const reader: FileReader = new FileReader()
        const timestamp = new Date().toISOString().replace(/[-:.]/g, '')
        const randomString = Math.random().toString().substring(2, 8)
        const fileName = 'New file' + timestamp + randomString

        reader.addEventListener(
            'load',
            function () {
                try {
                    setImage({ src: reader.result, alt: fileName })

                    if (typeof onChangePicture === 'function') {
                        onChangePicture()
                    }
                } catch (err) {
                    toast.error('Unable to update image')
                } finally {
                    setUpdatingPicture(false)
                }
            },
            false
        )

        if (reader.result instanceof ArrayBuffer) {
            throw new Error()
        }

        if (file === null || file === undefined) {
            setPictureError('Upload a file')
        } else if (file.size <= sizeLimit) {
            setUpdatingPicture(true)

            setPictureError('')

            reader.readAsDataURL(file)
        } else {
            setPictureError('File size is exceeding 3MB.')
        }
    }

    const handleOnClickPicture = () => {
        pictureRef.current.click()
    }

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-gray-200 ">{label}</label>

            <button
                disabled={updatingPicture}
                onClick={handleOnClickPicture}
                className={classNames(
                    'aspect-video group relative overflow-hidden rounded-md transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',

                    image.src ? 'hover:opacity-50 disabled:hover:opacity-100' : 'border-2 border-dotted hover:border-gray-400 focus:border-gray-400 disabled:hover:border-gray-200'
                )}
            >
                {image.src ? <Image src={image.src as string} alt={image.alt} layout="fill" objectFit="cover" /> : null}

                <div className="flex items-center justify-center">
                    {!image.src ? (
                        <div className="flex flex-col items-center space-y-2">
                            <div className="shrink-0 rounded-full bg-gray-200 p-2 transition group-hover:scale-110 group-focus:scale-110">
                                <CloudUploadIcon className="h-4 w-4 text-gray-500 transition" />
                            </div>

                            <span className="text-xs font-semibold text-gray-500 transition">{updatingPicture ? 'Image Uploading...' : 'Upload product Image'}</span>
                        </div>
                    ) : null}

                    <input ref={pictureRef} type="file" accept={accept} onChange={handleOnChangePicture} className="hidden" />
                </div>
            </button>

            {pictureError ? <span className="text-sm text-red-600">{pictureError}</span> : null}
        </div>
    )
}

export default AddProductImage
