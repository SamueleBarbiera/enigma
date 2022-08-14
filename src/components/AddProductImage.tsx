/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { CloudUploadIcon } from '@heroicons/react/outline'
import { addImg } from 'types/Image'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const AddProductImage = ({ src = '', alt = '', accept = '.png, .jpg, .jpeg, .gif .jiff', sizeLimit = 3 * 1024 * 1024, onChangePicture = () => null }: addImg) => {
    const pictureRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const [image, setImage] = useState({ src, alt })
    const [updatingPicture, setUpdatingPicture] = useState(false)
    const [pictureError, setPictureError] = useState('')

    const handleOnChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
        let file
        if (e.target.files) {
            file = e.target.files[0]
        }
        const reader: FileReader = new FileReader()
        const timestamp = new Date().toISOString().replace(/[-:.]/g, '')
        const randomString = Math.random().toString().substring(2, 8)
        const fileName = 'New file' + timestamp + randomString
        console.log('🚀 ~ file: AddProductImage.js ~ line 18 ~ handleOnChangePicture ~ fileName', fileName)

        reader.addEventListener(
            'load',
            async function () {
                try {
                    setImage({ src: reader.result, alt: fileName })
                    if (typeof onChangePicture === 'function') {
                        await onChangePicture(reader.result)
                    }
                } catch (err) {
                    toast.error('Unable to update image')
                } finally {
                    setUpdatingPicture(false)
                }
            },
            false
        )

        if (file) {
            if (file.size > sizeLimit) {
                setUpdatingPicture(true)
                setPictureError('')
                reader.readAsDataURL(file)
            } else {
                setPictureError('File size is exceeding 3MB.')
            }
        }
    }

    const handleOnClickPicture = () => {
        if (pictureRef.current) {
            pictureRef.current.click()
        }
    }

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-gray-200 ">Image</label>

            <button
                disabled={updatingPicture}
                onClick={handleOnClickPicture}
                className={classNames(
                    'aspect-video group relative overflow-hidden rounded-md transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    image.src ? 'hover:opacity-50 disabled:hover:opacity-100' : 'border-2 border-dotted hover:border-gray-400 focus:border-gray-400 disabled:hover:border-gray-200'
                )}
            >
                {image.src ? <Image src={image.src as string} alt={image.alt} layout="fill" objectFit={'cover'} /> : null}

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
