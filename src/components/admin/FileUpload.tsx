import axios, { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { Controller, useController, useFormContext } from 'react-hook-form'
import { ImageUrl } from 'src/types/IProduct'
import useStore, { Store } from '../../hooks/index'
import ImageUploading, { ImageListType } from "react-images-uploading";


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
    const [images, setImages] = useState([]);
    const maxNumber = 69;


    const onFileDrop = async (imageList: ImageListType,
        addUpdateIndex: number[] | undefined) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);

        try {
            store.setUploadingImage(true)
            const imagesRequests = imageList.map(file => axios.post<AxiosResponse, AxiosError>(
                `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`,
                {
                    image: file,
                }
            ));
            const data = await Promise.all(imagesRequests);

            console.log('🚀 ~ file: FileUpload.tsx ~ line 42 ~ data', data)

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            field.onChange(data.map(d => d.response?.data) as unknown as ImageUrl)
            return data


        } catch (err) {
            console.log('🚀 ~ file: FileUpload.tsx ~ line 56 ~ err', err)
            store.setUploadingImage(false)
            throw Error('Unable to update image')
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
                            <span className="mb-2 block">Choose profile photo</span>
                            {/* <input
                                className="mb-2 block text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                                type="file"
                                name={name}
                                onBlur={onBlur}
                                ref={ref}
                                onChange={onFileDrop}
                                multiple
                                accept="image/jpg, image/png, image/jpeg"
                            /> */}
                            <ImageUploading

                                multiple
                                value={images}
                                onChange={onFileDrop}
                                maxNumber={maxNumber}
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps
                                }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper">
                                        <button
                                            style={isDragging ? { color: "red" } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            Click or Drop here
                                        </button>
                                        &nbsp;
                                        <button onClick={onImageRemoveAll}>Remove all images</button>
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image.dataURL} alt="" width="100" />
                                                <div className="image-item__btn-wrapper">
                                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                                </div>
                                            </div>
                                        ))}
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
