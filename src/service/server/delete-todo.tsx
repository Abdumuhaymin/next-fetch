"use server";
const url = process.env.API_URL;
import { TodoData } from "@/types/todo";
import { revalidateTag } from "next/cache";

const deleteTodos = async (id: number): Promise<{}> => {
  const url = process.env.API_URL;
  try {
    const res = await fetch(url + `posts/${id}`, {
      method: "DELETE",
    });
    revalidateTag("todos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { deleteTodos };
