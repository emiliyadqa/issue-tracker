"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const simpleMDEOptions = useMemo(() => {
    return {
      status: false,
    };
  }, []);

  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE
            placeholder="Description"
            options={simpleMDEOptions}
            {...field}
          />
        )}
      ></Controller>

      <Button>Add New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
