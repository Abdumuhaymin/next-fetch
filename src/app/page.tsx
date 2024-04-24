import { getTodos } from "@/service/server/get-todos";
import { TodoCard } from "@/app/components/card/todo-card";

export default async function Home() {
  const data = await getTodos();

  return (
    <main className="p-24">
      {data.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </main>
  );
}
