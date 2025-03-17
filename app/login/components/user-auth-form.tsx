"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "react-dom";
import { signIn } from "../actions";
import { cn } from "@/lib/utils";
import Form from "@/components/core/data-entry/Form";
import { LoginValidation, LoginValidationType } from "@/validation/auth";
import { Button } from "@/components/ui/button";
import Alert from "@/components/core/feedbacks/Alert";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const responseMessageRef = useRef<{
    type: string;
    message: string;
    label: string;
  }>(null);

  const { pending } = useFormStatus();
  const form = useForm<LoginValidationType>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(values: LoginValidationType) {
    const formData = new FormData();

    setIsLoading(true);

    formData.append("username", values.username);
    formData.append("password", values.password);

    const data = await signIn(formData);

    if (data.type === "error") {
      responseMessageRef.current = data;
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {responseMessageRef.current?.type === "error" && (
        <Alert
          title={responseMessageRef.current?.label}
          description={responseMessageRef.current?.message}
          variant="destructive"
        />
      )}
      <Form
        form={form}
        onSubmit={onSubmit}
        forms={[
          {
            id: "username",
            label: "Username",
            name: "username",
            placeholder: "zed-crauser",
            type: "text",
          },
          {
            id: "password",
            label: "Password",
            name: "password",
            placeholder: "********",
            type: "password",
          },
        ]}
      >
        <Button
          type="submit"
          disabled={isLoading || pending}
          className="text-neutral-200 w-full"
        >
          Login with Email
        </Button>
      </Form>
    </div>
  );
}
