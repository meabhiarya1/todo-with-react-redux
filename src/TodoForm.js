import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo({ ...todo, title: "", desc: "" });
    console.log(todo);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h1>Todo</h1>
        <label className="">Title: </label>
        <input
          type="text"
          placeholder="Enter Todo title"
          className=""
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />

        <label>Descripton: </label>
        <input
          type="text"
          placeholder="Enter Todo Description"
          value={todo.desc}
          onChange={(e) => {
            setTodo({ ...todo, desc: e.target.value });
          }}
        />
        <button type="submit" className="bg-white-100">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
