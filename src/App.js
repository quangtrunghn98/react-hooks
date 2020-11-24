
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love fontend'},
    { id: 1, title: 'we love fontend'},
    { id: 1, title: 'they love fontend'},
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (todo < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: TodoList.length + 1,
      ...formValue,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React hook - Todolist</h1>

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
