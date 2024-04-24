"use client";
import { postTodos } from "@/service/server/post-todos";
import { useForm } from "react-hook-form";
interface inputs {
  title: string;
  body: string;
}

export const Form: React.FC = () => {
  const { handleSubmit, register, reset } = useForm();
};
