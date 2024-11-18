"use client";

import { useState } from "react";
import { createTodos } from "@/actions/todo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DialogDemo = () => {
  const [title, setTitle] = useState<string>(""); // TODOのタイトルを状態として管理

  // フォームが送信されたときに呼ばれる
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      return; // タイトルが空白の場合は処理を中止
    }
    const formData = new FormData(e.target as HTMLFormElement); // FormDataを作成
    await createTodos(formData); // createTodosにFormDataを渡す
    setTitle(""); // 入力フィールドをクリア
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white">
          <span className="font-bold">新規作成</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleCreate}>
          <DialogHeader>
            <DialogTitle>入力画面</DialogTitle>
            <DialogDescription>登録したいTODOを入力してください</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                TODO
              </Label>
              <Input
                type="text"
                placeholder="What is your Todo?"
                className="col-span-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // 入力変更時に状態更新
                name="title" // FormDataに渡すname属性
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">登録</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
