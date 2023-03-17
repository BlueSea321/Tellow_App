import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function FilterComponent({
    onFilter,
    onClear,
    filterText,
    placeHolderText
}) {
  return (
    <InputGroup className='mb-3' style={{ 'width': '200px' }}>
        <Form.Control
            type='text'
            value={filterText}
            onChange={onFilter}
            placeholder={placeHolderText}
        />
        <Button variant='primary' onClick={onClear}>
            X
        </Button>
    </InputGroup>
  )
}
