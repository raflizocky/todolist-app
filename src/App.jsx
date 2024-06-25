import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './layout/Header';
import TodoList from './components/TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <TodoList />
      </Container>
    </>
  );
}

export default App;