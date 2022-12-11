import React from 'react'
import './App.css'

const TodoItem = ({ todo, handleDeleteTodo, handleToggleIsDone }) => {

    const handleToggleClick = () => {
      handleToggleIsDone(todo.id);
    };
  
    const handleDeleteClick = () => {
      handleDeleteTodo(todo.id);
    };
      
  return (
      <div className='todo-content'>
        <div>{todo.content}</div>
        <button onClick={handleToggleClick}>
          {todo.isDone ? "Done" : "Undone"}
        </button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
  );
}

export default TodoItem