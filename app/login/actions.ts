"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginValidation } from "@/validation/auth";
import { generateToken } from "@/modules/token";

const CREDENTIAL_USER = {
  username: "testuser",
  password: "testpassword",
};

export async function signIn(formData: FormData) {
  const cookieStore = await cookies();
  const validatedFields = LoginValidation.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (
    validatedFields.data.username === CREDENTIAL_USER.username &&
    validatedFields.data.password === CREDENTIAL_USER.password
  ) {
    const token = generateToken({
      id: 1,
      data: { username: validatedFields.data.username },
    });
    cookieStore.set("qb-token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 18000000,
      sameSite: "strict",
    });
    return redirect("/dashboard");
  }

  return {
    type: "error",
    label: "Error",
    message: "Please enter a correct credential.",
  };
}
