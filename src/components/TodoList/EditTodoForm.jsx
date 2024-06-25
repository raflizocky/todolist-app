import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from '../../common/Button';
import Input from '../../common/Input';

function EditTodoForm({ todo, onSave, onCancel }) {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(todo.id, editedText);
  };

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="Edit todo"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodoForm;