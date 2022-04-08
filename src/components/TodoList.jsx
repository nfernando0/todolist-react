import { React, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <div className="bg-slate-300 p-20 h-screen">
        <h1 className="text-center text-4xl mt-10 -mb-10 font-bold">My Todo</h1>
        <div className="w-1/2 m-auto mt-32 bg-teal-500 rounded-md p-10">
          <div className="grid justify-center mt-11">
            <TodoForm onSubmit={addTodo} />
          </div>
          <div className="lg:w-1/2 m-auto">
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
