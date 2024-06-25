import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../common/Button';
import Input from '../../common/Input';

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto" className="flex-grow-1">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTodoForm;