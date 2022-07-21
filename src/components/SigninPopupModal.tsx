/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Fragment, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Dialog, Transition } from '@headlessui/react'
import { MailOpenIcon, XIcon, } from '@heroicons/react/outline'

interface Props {
  show: boolean,
  onClose: unknown,
}

const SigninPopupModal = ({ show = false, onClose = () => null }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [showConfirm, setConfirm] = useState<boolean>(false)
  const [showSignIn, setShowSignIn] = useState<boolean>(false)

  const closeModal = () => {
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  // Reset modal
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setDisabled(false)
        setConfirm(false)
        setShowSignIn(false)
      }, 200)
    }
  }, [show])

  useEffect(() => {
    toast.dismiss()
  }, [])

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />

        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative my-8 inline-block w-full max-w-xl transform overflow-hidden bg-neutral text-left shadow-2xl transition-all sm:rounded-xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 shrink-0 rounded-md p-1 transition hover:bg-gray-100 focus:outline-none"
              >
                <XIcon className="h-5 w-5" />
              </button>

              <div className="py-12">
                <div className="px-4 sm:px-12">
                  <div className="flex justify-center">
                  </div>
                  <Dialog.Title as="h3" className="mt-6 text-center text-lg font-bold sm:text-2xl">
                    {showSignIn ? 'Welcome back!' : 'Create an account'}
                  </Dialog.Title>
                  {!showSignIn ? (
                    <Dialog.Description className="mt-2 text-center text-base text-gray-500">
                      This feature will be implemented in next series of article.
                    </Dialog.Description>
                  ) : null}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SigninPopupModal
