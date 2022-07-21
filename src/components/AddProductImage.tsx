import { useState, useRef } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { CloudUploadIcon } from '@heroicons/react/outline'
// import absoluteUrl from 'next-absolute-url'
// import { GetServerSideProps, NextApiRequest } from 'next'

interface Props {
  label: string,
  objectFit: string,
  alt: string,
  src: string,
  accept: string,
  sizeLimit: number,
  onChangePicture: unknown,
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const AddProductImage = ({
  label = 'Image',
  src = '',
  alt = '',
  objectFit = 'cover',
  accept = '.png, .jpg, .jpeg, .gif .jiff',
  sizeLimit = 10 * 1024 * 1024,
  onChangePicture = () => null,
}: Props) => {
  const pictureRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [image, setImage] = useState<object>({ src, alt })
  const [updatingPicture, setUpdatingPicture] = useState<boolean>(false)
  const [pictureError, setPictureError] = useState<string>('')

  const handleOnChangePicture = (e: { target: { files: Blob[] } }) => {
    const file: Blob = e.target.files[0]
    const reader: FileReader = new FileReader()
    const fileName: string = file.name?.split('.')?.[0] ?? 'New file'

    reader.addEventListener(
      'load',
      function () {
        try {
          setImage({ ...Image, src: reader.result, alt: fileName })
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

    if (file.size <= sizeLimit) {
      setUpdatingPicture(true)
      setPictureError('')
      reader.readAsDataURL(file)
    } else {
      setPictureError('File size is exceeding 10MB.')
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
          'relative aspect-video overflow-hidden rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition group focus:outline-none',
          image.src
            ? 'hover:opacity-50 disabled:hover:opacity-100'
            : 'border-2 border-dotted hover:border-gray-400 focus:border-gray-400 disabled:hover:border-gray-200'
        )}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt ?? ''}
            layout="fill"
            objectFit={objectFit}
          />
        ) : null}

        <div className="flex items-center justify-center">
          {!image.src ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="shrink-0 rounded-full p-2 bg-gray-200 group-hover:scale-110 group-focus:scale-110 transition">
                <CloudUploadIcon className="w-4 h-4 text-gray-500 transition" />
              </div>
              <span className="text-xs font-semibold text-gray-500 transition">
                {updatingPicture
                  ? 'Image Uploading...'
                  : 'Upload product Image'}
              </span>
            </div>
          ) : null}
          <input
            ref={pictureRef}
            type="file"
            accept={accept}
            onChange={handleOnChangePicture}
            className="hidden"
          />
        </div>
      </button>

      {pictureError ? (
        <span className="text-red-600 text-sm">{pictureError}</span>
      ) : null}
    </div>
  )
}

export default AddProductImage

// export const getServerSideProps: GetServerSideProps = async (req: NextApiRequest) => {
//   const { origin } = absoluteUrl(req, req.headers.host)
//   console.log('Requested URL ->', origin)
//   // (or) other way
//   const host = absoluteUrl(req, req.headers.host)
//   console.log('Requested URL ->', host.origin)
// }
