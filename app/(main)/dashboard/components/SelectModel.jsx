"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";

export function SelectModel() {
  const path = usePathname();

  if (path !== "/chat") {
    return <h1 className="text-2xl font-semibold">Welcome, Alpha Bytes</h1>;
  }
  return (
    <Select className="">
      <SelectTrigger className="w-[180px] border-none focus-visible:ring-0 outline-none shadow-none data-[placeholder]:text-[#101010] [&_svg:not([class*='text-'])]:text-[#101010]">
        <SelectValue placeholder="Select a Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Models</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
