import React from 'react';
import { ListGroup, Form, ButtonGroup } from 'react-bootstrap';
import Button from '../../common/Button';

function TodoItem({ todo, onToggle, onDelete, onEdit, onView }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      onDelete(todo.id);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check 
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        label={todo.text}
      />
      <ButtonGroup>
        <Button variant="info" size="sm" onClick={() => onView(todo)}>
          View
        </Button>
        <Button variant="warning" size="sm" onClick={() => onEdit(todo)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
}

export default TodoItem;