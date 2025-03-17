"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get("qb-token");

  if (token) {
    cookieStore.delete("qb-token");
    return redirect("/login");
  }

  return {
    type: "error",
    label: "Error",
    message: "Something gone wrong",
  };
}
