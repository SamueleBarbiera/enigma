import React from 'react'

interface ModalProps {
    name: string
    description: string
    date: string
    design: string
    material: string
    price: number
    quantity: number
}

const Modal = ({ name, description, date, design, material, price, quantity }: ModalProps) => {
    return (
        <>
            <label htmlFor="my-modal-6" className="modal-button btn">
                Visualizza {name}
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">{description}</p>
                    <p className="py-4">{date}</p>
                    <p className="py-4">{design}</p>
                    <p className="py-4">{material}</p>
                    <p className="py-4">{price}</p>
                    <p className="py-4">{quantity}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">
                            Yay!
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
