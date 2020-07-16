import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <React.Fragment>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </div>
      <button onClick={() => completeTodo(index)}>complete</button>
      <button onClick={() => deleteTodo(index)}>x</button>
    </React.Fragment>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      addTodo(value);
      setValue("");
    } else {
      addTodo("added an empty todo");
      setValue("");
    }
  };
  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="your todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </form>
  );
};
const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      isCompleted: false,
    },
    {
      text: "meet a friend for lunch",
      isCompleted: false,
    },
    {
      text: "walk the dog",
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;

    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
