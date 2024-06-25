import React, { useState } from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';
import TodoDetail from './TodoDetail';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [viewingTodo, setViewingTodo] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (variant, message) => {
    setAlert({ variant, message });
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    showAlert('success', 'New todo added successfully!');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showAlert('danger', 'Todo deleted successfully!');
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  const saveTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingTodo(null);
    showAlert('warning', 'Todo updated successfully!');
  };

  const viewTodoDetail = (todo) => {
    setViewingTodo(todo);
  };

  return (
    <div>
      <h2 className="mb-4">My Todo List</h2>
      {alert && (
        <Alert variant={alert.variant} onClose={() => setAlert(null)} dismissible>
          {alert.message}
        </Alert>
      )}
      <AddTodoForm onAddTodo={addTodo} />
      <ListGroup className="mt-4">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo}
            onEdit={editTodo}
            onView={viewTodoDetail}
          />
        ))}
      </ListGroup>
      {editingTodo && (
        <EditTodoForm
          todo={editingTodo}
          onSave={saveTodo}
          onCancel={() => setEditingTodo(null)}
        />
      )}
      {viewingTodo && (
        <TodoDetail
          todo={viewingTodo}
          onClose={() => setViewingTodo(null)}
        />
      )}
    </div>
  );
}

export default TodoList;