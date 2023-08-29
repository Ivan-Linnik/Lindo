import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './components/UI/Form';
import TodoList from './components/Todos/TodoList';
import FuncButtons from './components/UI/FuncButtons';

function App() {
  const [todos, setTodos] = useState([]);
  todos.sort((a, b) => a.isCompleted - b.isCompleted);

  function createTodoHandler(inputValue) {
    const newTodo = {
      text: inputValue,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }

  function eraseAllTodosHandler() {
    setTodos([]);
  }

  function eraseCompletedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const todosCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="appHeader">Lindo</h1>
      <Form createTodo={createTodoHandler} />
      {todosCount ? (
        <FuncButtons
          eraseAllTodos={eraseAllTodosHandler}
          eraseCompletedTodos={eraseCompletedTodosHandler}
          totalTodos={todosCount}
          completedTodos={completedCount}
        />
      ) : (
        <div className="FuncButtonsDeputy"></div>
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
