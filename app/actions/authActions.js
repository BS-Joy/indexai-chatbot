"use server";

import { axiosInstance } from "@/lib/axios";
import { cookies } from "next/headers"; // Import cookies from Next.js

export const logoutAction = async () => {
  // Get the cookie store
  const cookieStore = await cookies();

  // Get the access token from cookies (assuming it's stored as 'accessToken')
  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data.success) {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
    }
    return res.data; // Optionally return the response data
  } catch (error) {
    console.error("Logout failed:", error);
    throw error; // Re-throw the error for handling by the caller
  }
};

export const logInAction = async (userData) => {
  // Get the cookie store
  const cookieStore = await cookies();

  try {
    const res = await axiosInstance.post("/auth/login", userData);
    if (res.data.success) {
      cookieStore.set("accessToken", res.data.accessToken, { path: "/" });
      cookieStore.set("refreshToken", res.data.refreshToken, { path: "/" });

      return res.data;
    }
  } catch (error) {
    console.error("Logout failed:", error);
    throw error; // Re-throw the error for handling by the caller
  }
};

export const setCookiesAction = async (tokens) => {
  const cookieStore = await cookies(); // Dynamic import for server-only code

  console.log(tokens);

  cookieStore.set("accessToken", tokens?.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400, // 1 day
    path: "/",
  });

  cookieStore.set("refreshToken", tokens?.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 604800, // 7 days
    path: "/",
  });

  const token = cookieStore.get("accessToken");

  if (token?.value === tokens?.accessToken) {
    return { success: true };
  } else {
    console.error("something went wrong during cookies set");
    return { success: false };
  }
};
