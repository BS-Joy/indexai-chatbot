import React from "react";
import EmailCard from "./EmailCard";

export default function EmailsContainer() {
  return (
    <div className="flex flex-col gap-4">
      <EmailCard />
      <EmailCard />
      <EmailCard />
      <EmailCard />
    </div>
  );
}
