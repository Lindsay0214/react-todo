import { useState, useEffect, useRef } from "react";
import useInput from "./useInput";

function writeTodoToLocalStorage(todo) {
  window.localStorage.setItem("todo", JSON.stringify(todo));
}

const useTodo = () => {
  const id = useRef(1);
  const [error, setError] = useState()
  const [todo, setTodo] = useState(() => {
    let todoData = window.localStorage.getItem("todo") || "";
    if (todoData) {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  });
  const { value, setValue, handleChange } = useInput();

  useEffect(() => {
    writeTodoToLocalStorage(todo);
  }, [todo]);

  const handleButtonClick = () => {
    if (!value) return setError("please enter your todo")
    setTodo([{ id: id.current, content: value }, ...todo]);
    setValue("");
    id.current++;
  };

  const handleDeleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone
        };
      })
    );
  };

  return {
    todo,
    setTodo,
    id,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange,
    error
  };
};

export default useTodo;
