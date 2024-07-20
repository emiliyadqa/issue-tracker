"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useMemo } from "react";

const NewIssuePage = () => {
  const simpleMDEOptions = useMemo(() => {
    return {
      status: false,
    };
  }, []);

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE placeholder="Description" options={simpleMDEOptions} />
      <Button>Add New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
