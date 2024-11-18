"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: [
        { done: "asc" }, // 完了ステータスを昇順
        { date: "desc" }, // 同じステータス内では作成日を降順
      ],
    });
    return todos;
  } catch (error) {
    console.error("データ取得に失敗しました", error);
    return [];
  }
}
export async function deleteTodos(id: number) {
  try {
    const todo = await prisma.todo.delete({ where: { id } });
    revalidatePath("/");
    return todo;
  } catch (error) {
    console.error("データ削除に失敗しました", error);
    return null;
  }
}
export async function createTodos(formData: FormData) {
  try {
    // console.log("FormData:", formData); // FormDataの内容を確認
    const title = formData.get("title") as string;
    if (!title) {
      throw new Error("タイトルが空です");
    }
    await prisma.todo.create({ data: { title } });
    revalidatePath("/");
  } catch (error) {
    console.error("登録に失敗しました", error);
    return null;
  }
}
