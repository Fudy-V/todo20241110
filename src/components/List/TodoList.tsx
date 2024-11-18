import { getTodos } from "@/actions/todo";
import React from "react";
import DeleteButton from "../Button/DeleteButton";

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul className="bg-gray-300 min-h-[100vh] my-5 rounded-sm">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-[60vw] flex justify-around bg-blue-300 text-black  m-3 p-3 rounded-sm items-baseline"
        >
          <span className=" text-xl font-bold ">{todo.title}</span>
          <DeleteButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
};
