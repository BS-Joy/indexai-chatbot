import React from "react";
import { KeywordSelector } from "./KeywordSelector";
import { SelectComponent } from "../../../../components/SelectComponent";
import { DatePicker } from "@/components/DatePicker";

const timePeriods = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
];

export default function FilterMails() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pb-4">
      <DatePicker />
      <SelectComponent
        title="Select Time Period"
        label="Time Periods"
        className="border"
        seperator={true}
        options={timePeriods}
      />
      <KeywordSelector />
    </div>
  );
}
