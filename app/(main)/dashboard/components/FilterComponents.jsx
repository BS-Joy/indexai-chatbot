import React from "react";
import { KeywordSelector } from "./KeywordSelector";

export default function FilterComponents() {
  return (
    <div className="flex gap-2">
      <KeywordSelector />
      <KeywordSelector />
      <KeywordSelector />
      <KeywordSelector />
    </div>
  );
}
