"use server";

import { axiosInstance } from "@/lib/axios";
import { cookies } from "next/headers"; // Import cookies from Next.js

export const logoutAction = async () => {
  // Get the cookie store
  const cookieStore = await cookies();

  // Get the access token from cookies (assuming it's stored as 'accessToken')
  const accessToken = cookieStore.get("accessToken")?.value;

  //   console.log({ accessToken });

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

    console.log(data);
    if (data.success) {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
    }
    // return res.data; // Optionally return the response data
  } catch (error) {
    console.error("Logout failed:", error);
    throw error; // Re-throw the error for handling by the caller
  }
};
