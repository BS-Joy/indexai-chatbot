import React from "react";
import ProviderIcon from "./ProviderIcon";
import slack from "@/public/Slack.png";
import outlook from "@/public/outlook.png";
import gmail from "@/public/gmail.png";
import notion from "@/public/notion.png";
import asana from "@/public/asana.png";

export default function AllProviders() {
  return (
    <div className="hidden lg:flex justify-center gap-8 w-full mx-auto">
      <ProviderIcon image={outlook} title={"outlook"} />
      <ProviderIcon image={gmail} title={"gmail"} />
      <ProviderIcon image={slack} title={"slack"} />
      <ProviderIcon image={notion} title={"notion"} commingSoon={true} />
      <ProviderIcon image={asana} title={"asana"} commingSoon={true} />
    </div>
  );
}
