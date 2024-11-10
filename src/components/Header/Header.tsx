import React from "react";
import { Button } from "../ui/button";

type Title = {
  title: string;
};

export default function Header(props: Title) {
  return (
    <>
      <header className="flex flex-row justify-around py-2 border-b-2 border-gray-500">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <Button>登録</Button>
      </header>
    </>
  );
}
