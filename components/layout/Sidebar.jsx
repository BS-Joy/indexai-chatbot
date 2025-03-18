/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4p67afrMzU1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { GrLogout } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ChatHeader from "@/app/(main)/chat/components/ChatHeader";
import { usePathname, useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions/authActions";
import { useState } from "react";

const navLinks = [
  {
    path: "/dashboard",
    icon: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    path: "/chat",
    icon: MdOutlineChatBubbleOutline,
    label: "Chat",
  },
  {
    path: "#",
    icon: RiSettings2Line,
    label: "Setting",
  },
];

const publicRoutes = ["/", "/about", "/connect", "/security", "/team"];

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();

    router.push("/");
  };

  if (publicRoutes.includes(pathName)) {
    return;
  }

  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r lg:bg-gray-100 dark:lg:bg-gray-800">
        {/* pc sidbar */}
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            {/* sidebar header */}
            <Link
              href="#"
              className="flex items-center gap-3 font-bold"
              prefetch={false}
            >
              <Avatar>
                <p className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-emerald-500">
                  {" "}
                  CP{" "}
                </p>
              </Avatar>
              <div>
                <h4 className="font-semibold text-[20px]">Alpha Bytes</h4>
                <span className="text-xs font-light text-[#101010]">
                  alphabytes450@gmail.com
                </span>
              </div>
            </Link>

            {/* sidebar links */}
            <nav className="space-y-1">
              {/* dashboard */}
              {navLinks?.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${
                    pathName === link.path && "link-btn"
                  }`}
                  prefetch={false}
                >
                  <link.icon className="size-6" color="#101010" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* sidebar footer */}
          <div className="space-y-4">
            <Button
              type="submit"
              className="flex items-center gap-2 text-sm cursor-pointer"
              variant="ghost"
              onClick={handleLogout}
            >
              <GrLogout className="size-6" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* mobile sidebar */}
      <div className="flex-1">
        <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 font-bold"
              prefetch={false}
            >
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg">Acme Inc</span>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>

              {/* mobile navlinks */}
              <SheetContent side="left" className="w-64">
                <div className="flex h-full flex-col justify-between py-6 px-4 mt-4">
                  <div className="space-y-6">
                    <nav className="space-y-1">
                      {navLinks?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.path}
                          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${
                            pathName === link.path && "link-btn"
                          }`}
                          prefetch={false}
                          onClick={() => setIsOpen(false)}
                        >
                          <link.icon className="size-6" color="#101010" />
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm"
                        variant="ghost"
                      >
                        <GrLogout className="size-6" />
                        <span>Logout</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <section className="p-4 pb-0 lg:p-6">
          <ChatHeader />
          {children}
        </section>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
