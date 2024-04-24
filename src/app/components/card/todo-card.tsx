"use client";
import { TodoData } from "@/types/todo";
import React from "react";
import { deleteTodos } from "@/service/server/delete-todo";

export const TodoCard: React.FC<TodoData> = ({ body, id, title }) => {
  return (
    <div>
      <h1 className="text-2xl text-blue-400">{id}</h1>
      <h2 className="text-xl text-violet-700">{title}</h2>
      <p className="text-lg text-red-500">{body}</p>
      <button onClick={() => deleteTodos(id)}>DELETE</button>
    </div>
  );
};
