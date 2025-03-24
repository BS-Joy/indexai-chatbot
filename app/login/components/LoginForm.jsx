"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User } from "lucide-react";
import Link from "next/link";
import InputField from "@/app/connect/components/InputField";
import Image from "next/image";
import gmail from "@/public/gmail.png";
import outlook from "@/public/outlook.png";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inboxCount: "",
    painPoint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-start mb-6">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-gray-600">Choose your mailbox to get started</p>
      </div>

      <div className="flex gap-10 pb-16 pt-10">
        <Image src={gmail} className="size-[90px] w-24" alt="gmail logo" />
        <Image src={outlook} className="size-[90px] w-24" alt="outlook logo" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* mail */}
        <InputField
          icon={Mail}
          name={"email"}
          type={"email"}
          placeHolder={"E-mail"}
          value={formData.email}
          handleChange={handleChange}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="py-6 mt-6 px-24 w-[80%] rounded-full bg-gradient-to-r from-[#00ACDA] via-blue-400 to-[#43D4FB] hover:opacity-90 text-white"
          >
            Join
          </Button>
        </div>
      </form>

      <div className="text-center mt-4 text-sm">
        Don&apos;t have an account?
        <Link
          href="/connect"
          className="text-[#00ACDA] hover:text-[#43D4FB] ml-1"
        >
          Join us
        </Link>
      </div>
    </div>
  );
}
