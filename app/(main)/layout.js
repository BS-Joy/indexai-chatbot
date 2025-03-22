// import Sidebar from "@/components/layout/Sidebar";
import Sidebar from "@/components/layout/Sidebar";
import Sidebar2 from "@/components/layout/Sidebar2";
import { axiosInstance } from "@/lib/axios";
import { cookies, headers } from "next/headers";
import React from "react";
import { RiSparkling2Line } from "react-icons/ri";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");

  // console.log({ token: token.value });

  // const res = await axiosInstance.get("/users/me", {
  //   headers: { Authorization: `Bearer ${token.value}` },
  // });

  // const user = res.data.data;
  const user = {
    name: "Josh",
    email: "josh@gmail.com",
    profilePicture:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <section className="bg-white">
      <Sidebar user={user}>{children}</Sidebar>
      {/* <Sidebar user={user}>{children}</Sidebar> */}
    </section>
  );
}
