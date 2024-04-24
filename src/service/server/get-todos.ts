"use server";
const url = process.env.API_URL;
import { TodoData } from "@/types/todo";

const getTodos = async (): Promise<TodoData[]> => {
  try {
    const res = await fetch(url + "/posts", { next: { tags: ["todos"] } });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export { getTodos };
