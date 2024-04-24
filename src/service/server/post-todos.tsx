"use server";
const url = process.env.API_URL;
import { TodoData } from "@/types/todo";

const postTodos = async (title: string, body: string): Promise<TodoData> => {
  try {
    const res = await fetch(url + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
export { postTodos };
