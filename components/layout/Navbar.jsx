import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/logo.png";
import bgImage from "@/public/herobg.png";

export default function Navbar() {
  return (
    <header className=" border-b border-b-white ">
      <div className="container flex h-20 w-full items-center px-4 md:px-6 justify-between mx-auto">
        {/* Logo should always be visible */}
        <Link href="/" className="flex items-center" prefetch={false}>
          {/* <MountainIcon className="h-6 w-6" /> */}
          <Image src={logoImage} alt="Index Ai Logo" className="si" />
          {/* <span className="sr-only">Acme Inc</span> */}
        </Link>

        {/* Navigation for large screens */}
        <nav className="hidden lg:flex gap-6 min-w-[400px]">
          <NavLinks />
        </nav>

        {/* Mobile Menu (Hamburger on the right) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden ml-auto bg-[#e9e9e9] border border-white"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <NavLinks />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLinks() {
  return (
    <div className="grid gap-2 py-6 lg:flex lg:gap-6 lg:py-0 w-full">
      {[
        { title: "About Us", path: "about" },
        { title: "Security", path: "/security" },
        { title: "Team", path: "/team" },
        { title: "Contact", path: "/contact" },
      ].map((text) => (
        <Link
          key={text.title}
          href={text.path}
          className="flex w-full items-center py-2 text-lg font-semibold lg:text-sm lg:py-0"
          prefetch={false}
        >
          {text.title}
        </Link>
      ))}
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
