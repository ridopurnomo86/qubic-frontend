"use client";

import dayjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Form from "@/components/core/data-entry/Form";
import { Button } from "@/components/ui/button";
import {
  EditPostValidation,
  EditPostValidationType,
} from "@/validation/edit-post";
import PostDataType from "@/types/data/posts";

type UserAuthFormProps = {
  className?: string;
  defaultValue: PostDataType;
  postId: number;
};

const UserEditForm = ({
  className,
  defaultValue,
  postId,
  ...props
}: UserAuthFormProps) => {
  const { pending } = useFormStatus();
  const form = useForm<EditPostValidationType>({
    resolver: zodResolver(EditPostValidation),
    defaultValues: {
      title: defaultValue.title,
      body: defaultValue.body,
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: EditPostValidationType) => {
    setIsLoading(true);

    const request = await fetch(
      `${process.env.BACKEND_BASE_URL}/posts/${postId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: values.title,
          body: values.body,
          id: defaultValue.id,
          userId: defaultValue.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
    );

    setIsLoading(false);

    if (request.ok)
      return toast("Post has been updated", {
        description: dayjs().format("dddd, MMMM DD, YYYY at H:mm A"),
        dismissible: true,
      });

    return toast("Something gone wrong", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      dismissible: true,
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form
        form={form}
        onSubmit={onSubmit}
        forms={[
          {
            id: "title",
            label: "Title",
            name: "title",
            placeholder: "",
            type: "text",
          },
          {
            id: "body",
            label: "Body",
            name: "body",
            placeholder: "",
            type: "text",
          },
        ]}
      >
        <Button
          type="submit"
          disabled={isLoading || pending}
          className="text-neutral-200 w-full"
        >
          Edit Post
        </Button>
      </Form>
    </div>
  );
};

export default UserEditForm;
