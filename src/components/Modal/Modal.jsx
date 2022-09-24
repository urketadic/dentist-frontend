import React from 'react'
import './Modal.scss'

function Modal({closeModal, text}) {
    return (
        <div className="modalBackground" onClick={() => closeModal(false)}>
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}> X </button>
                {text}
            </div>
        </div>
    )
}

export default Modal
