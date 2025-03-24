import Image from "next/image";
import React from "react";

export default function ProviderIcon({ image, title, commingSoon }) {
  return (
    <div className="flex flex-1 gap-2">
      <div className="flex flex-col flex-1 items-center gap-2">
        <Image
          src={image}
          alt={title}
          className="size-[50px] md:size-[90px] w-[50px] md:w-[100px]"
        />
        {commingSoon && (
          <p className="link-btn text-[10px] md:text-[12px] rounded-full text-center py-1 px-2">
            Coming Soon!
          </p>
        )}
      </div>
    </div>
  );
}
