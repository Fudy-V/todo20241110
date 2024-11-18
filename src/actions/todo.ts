"use server";
import prisma from "@/lib/prisma";

export async function getTodos() {
  try {
    const todos = prisma.todo.findMany({
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
