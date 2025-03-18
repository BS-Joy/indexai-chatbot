"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const apps = [
  {
    name: "Outlook",
    provider: "microsoft",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-outlook-logo-icon-download-in-svg-png-gif-file-formats--office-365-pack-logos-icons-1174817.png?f=webp&w=256",
    className: "bg-[#0078D4]",
  },
  {
    name: "Gmail",
    provider: "google",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--mail-email-logos-icons-2416660.png?f=webp&w=256",
    className: "bg-white",
  },
  {
    name: "Yahoo",
    provider: "yahoo",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-yahoo-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284834.png?f=webp&w=256",
    className: "bg-[#5F01D1]",
  },
];

export default function SignIn() {
  const router = useRouter();
  const logIn = async (provider) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Change this to your actual base URL

      // const response = await axios.get(`${baseUrl}/auth/${provider}`, {
      //   // headers: {
      //   //   authProvider: provider,
      //   // },
      // });

      router.push(`${baseUrl}/auth/oauth/${provider}?redirect=/dashboard`);

      // console.log("Login Response:", response.data);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {apps.map((app, index) => (
        <div
          onClick={() => logIn(app.provider)}
          key={app.name}
          className={`
                      rounded-2xl shadow-lg p-6 lg:p-8 cursor-pointer
                      ${app.className}
                      ${
                        index === 2
                          ? "col-span-2 lg:col-span-1 lg:translate-x-36 p-8"
                          : ""
                      }
                    `}
        >
          <div className="aspect-square relative">
            <Image
              src={app.icon || "/placeholder.svg"}
              alt={`${app.name} icon`}
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
