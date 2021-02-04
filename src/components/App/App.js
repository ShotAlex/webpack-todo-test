import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from '../TodoList';
import { Context } from '../context';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    const whenStart = localStorage.getItem('todos') || []
    setTodos(JSON.parse(whenStart))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const getTimeNow = () => {
    const now = new Date()

    const date = now.toLocaleDateString('ru-RU')
    const time = `${now.getHours()}:${now.getMinutes()}`

    return date + '/' + time
  }

  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos([
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
          time: getTimeNow()
        },
        ...todos
      ])
      setTodoTitle('')
    }
  }

  const removeTodo = id => {
    setTodos(todos.filter( todo => {
      return todo.id !== id
    }))
  }

  const toggleTodo = id => {
    setTodos(todos.map( todo => {
      if(todo.id === id ) todo.completed = !todo.completed
      return todo
    }))
  }

  return (
    <Context.Provider value={{ toggleTodo, removeTodo}} >
      <div className="app">
        <h1>TODO App</h1>
        <div className="input-field">
          <input
              className="input-task"
              placeholder="Input U task"
              type="text"
              value={todoTitle}
              onChange={event => setTodoTitle(event.target.value)}
              onKeyPress={addTodo}
            />
        </div>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default App;
