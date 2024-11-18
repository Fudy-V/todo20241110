import prisma from "@/lib/prisma";

const seed = async () => {
  const todos = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];
  for (let todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }
};
seed()
  .catch((e) => {
    console.error(`${e}`);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
