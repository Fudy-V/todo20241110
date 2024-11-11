"use client";
import Header from "@/components/Header/Header";
import React from "react";
import InputForm from "./component/InputForm";

export default function input() {
  return (
    <>
      <Header title="Register TODO" transitionUrl="./" buttonText="完了" />
      <main className="my-3 flex flex-col p-3">
        <InputForm />
      </main>
    </>
  );
}
