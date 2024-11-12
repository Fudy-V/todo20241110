import Header from "@/components/Header/Header";
import { TodoList } from "@/components/List/TodoList";

export default function Home() {
  return (
    <>
      <Header title="TODO LIST" buttonText="登録" />
      <main className="px-4 flex flex-row justify-center">
        {/* <div className="w-10 h-10 bg-black"></div> */}
        <TodoList />
      </main>
    </>
  );
}
