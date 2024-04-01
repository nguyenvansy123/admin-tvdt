import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export const Dialog = (...props) => {
    const { show, handleClose, btn } = props

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
           
                {
                    btn && btn.map((value, key) => {
                        return <button
                            key={key}
                            style={{ backgroundColor: `${value.color}` }}
                            onClick={() => {

                                if (value.onClick) {
                                    value.onClick && value.onClick();
                                }
                            }}
                        >
                            {value.title}
                        </button>
                    })
                }
            </Modal.Footer>
        </Modal>
    )
}
