"use client";
import React from "react";
import { Button } from "../ui/button";
import { deleteTodos } from "@/actions/todo";

const handleDelete = async (id: number) => {
  await deleteTodos(id);
};

const DeleteButton = ({ id }: { id: number }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleDelete(id);
      }}
    >
      <Button type="submit" className="bg-white text-black hover:bg-slate-100 font-bold">
        削除
      </Button>
    </form>
  );
};

export default DeleteButton;
