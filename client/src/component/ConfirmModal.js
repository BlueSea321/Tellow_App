import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLangContext } from '../context/langContext';

export default function ConfirmModal({
    show,
    modalBody,
    handleClose,
    callback
}) {
    const { langData } = useLangContext();

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{langData.component.confirmModal.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{modalBody}</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
                {langData.component.confirmModal.cancel}
            </Button>
            <Button variant='primary' onClick={callback}>
                {langData.component.confirmModal.confirm}
            </Button>
        </Modal.Footer>
    </Modal>
  )
}
