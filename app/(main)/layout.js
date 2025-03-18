import Sidebar from "@/components/layout/Sidebar";
import { axiosInstance } from "@/lib/axios";
import { cookies } from "next/headers";
import React from "react";

export default async function RootLayout({ children }) {
  // const res = axiosInstance
  return (
    <main>
      <Sidebar>{children}</Sidebar>
    </main>
  );
}
