import React from 'react'
import './App.css';
import TodoItem from './TodoItem'
import useTodo from "./hooks/useTodo";

const TodoList = () => {
  const {
      todo,
      handleButtonClick,
      handleDeleteTodo,
      handleToggleIsDone,
      value,
      handleChange,
      error
  } = useTodo()

return (
    <div className='todo-wrapper'>
      <h1>Todo</h1>
      <div className='todo-header'>
        <input
            type="text"
            placeholder="todo"
            value={value}
            onChange={handleChange}
        />
        <button onClick={handleButtonClick}>Add</button>
        <span className='error'>{error}</span>
      </div>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </div>
  )
}

export default TodoList