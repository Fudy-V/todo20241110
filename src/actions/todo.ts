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
