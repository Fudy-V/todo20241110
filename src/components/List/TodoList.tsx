import { getTodos } from "@/actions/todo";
import React from "react";
import { Button } from "../ui/button";

export const TodoList = async () => {
  const todos = await getTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-[60vw] flex justify-around bg-blue-300 text-black  m-3 p-3 rounded-sm items-baseline"
        >
          <span className=" text-xl font-bold ">{todo.title}</span>{" "}
          <Button className="bg-white text-black hover:bg-slate-100 font-bold">削除</Button>
        </li>
      ))}
    </ul>
  );
};
