import Sidebar from "@/components/layout/Sidebar";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <main>
      <Sidebar>{children}</Sidebar>
    </main>
  );
}
