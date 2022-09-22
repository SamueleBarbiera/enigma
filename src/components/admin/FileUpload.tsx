import axios, { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { Controller, useController, useFormContext } from 'react-hook-form'
import { ImageUrl } from 'src/types/IProduct'
import useStore, { Store } from '../../hooks/index'
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading'
import Image from 'next/image'

interface FileUpLoaderProps {
    name: string
}

export default function FileUpLoader({ name }: FileUpLoaderProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const { field } = useController({ name, control })
    const store: Store = useStore()
    const [images, setImages] = useState<never[]>([])

    const onFileDrop = async (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        console.log(imageList, addUpdateIndex)
        setImages(imageList as never[])

        try {
            store.setUploadingImage(true)
            const imagesRequests: Promise<AxiosError>[] = imageList.map((file: ImageType) =>
                axios.post<AxiosResponse<ImageUrl>, AxiosError>(
                    `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`,
                    {
                        image: file,
                    }
                )
            )
            const data = await Promise.all<ImageUrl>(imagesRequests as Iterable<ImageUrl | PromiseLike<ImageUrl>>)

            console.log('🚀 ~ file: FileUpload.tsx ~ line 42 ~ data', data)

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            field.onChange(data.map((d) => d.data.url))
            return data
        } catch (err) {
            console.log('🚀 ~ file: FileUpload.tsx ~ line 56 ~ err', err)
            store.setUploadingImage(false)
        } finally {
            store.setUploadingImage(false)
            console.log('FINITOOOOOOOOOOO')
        }
    }

    return (
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field: { name } }) => (
                <>
                    <div className="mb-2 flex items-center justify-between">
                        <div>
                            <ImageUploading
                                multiple
                                value={images}
                                maxNumber={4}
                                allowNonImageType={false}
                                onChange={onFileDrop}
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                    errors,
                                }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper">
                                        <button
                                            className="btn m-2 bg-beige-200 text-beige-900"
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            Click or Drop here
                                        </button>
                                        &nbsp;
                                        <button
                                            onClick={onImageRemoveAll}
                                            className="btn m-2 bg-beige-400 text-beige-900"
                                        >
                                            Remove all images
                                        </button>
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <Image
                                                    layout="responsive"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full rounded-md object-cover object-center shadow-md"
                                                    src={image.dataURL ?? ''}
                                                    alt=""
                                                />
                                                <div className="image-item__btn-wrapper">
                                                    <button
                                                        onClick={() => onImageUpdate(index)}
                                                        className="btn m-2 bg-beige-200 text-beige-900"
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        onClick={() => onImageRemove(index)}
                                                        className="btn btn-error m-2"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        {errors ? (
                                            <div className="alert alert-error shadow-lg">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 flex-shrink-0 stroke-current"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>

                                                {errors.maxNumber && (
                                                    <span>Number of selected images exceed maxNumber</span>
                                                )}
                                                {errors.acceptType && <span>Your selected file type is not allow</span>}
                                                {errors.maxFileSize && (
                                                    <span>Selected file size exceed maxFileSize</span>
                                                )}
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                    <p className={`mb-2 text-xs italic text-red-500 ${errors[name] ? 'visible' : 'invisible'}`}>
                        {errors[name] && (errors[name]?.message as string)}
                    </p>
                </>
            )}
        />
    )
}
