import React from "react";
import InputTodo from "../input/InputTodo";

type Title = {
  title: string;
  buttonText: string;
  // transitionUrl: string;
};

export default function Header(props: Title) {
  return (
    <>
      <header className="flex flex-row justify-around py-2 border-b-2 border-gray-500">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <InputTodo />
      </header>
    </>
  );
}
