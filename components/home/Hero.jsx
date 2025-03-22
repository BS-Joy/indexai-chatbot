import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import HeroProviderIcon from "./ProviderIcon";
import AllProviders from "./AllProviders";

export default function Hero() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 lg:flex flex-col gap-12 lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-1">
            <p className="bg-[#1010100D] w-fit px-5 md:px-10 py-1 md:py-3 rounded-full text-[#101010] font-medium text-sm md:text-lg">
              Introduce AI Chatbot
            </p>
          </div>

          {/* title */}
          <div className="relative">
            <h1 className="lg:w-[800px] text-6xl sm:leading-24 font-bold">
              <span className="text-[70px]">
                Stop Drowning in Email <br />
              </span>{" "}
              Meet Your <span className="text-[#00ACDA]">New Assistant</span>{" "}
              Meet
              <span className="text-[#FD8799]"> InboxAI</span>
            </h1>

            {/* features */}
            {/* read */}
            <div className="hidden lg:flex absolute -top-16 -left-20 animate-bounce">
              <p className="bg-[#F98FFD] py-2 px-10 font-medium rounded-full relative">
                Read
              </p>
              <div className="rotate-[85deg] absolute top-8 -right-8">
                <TiLocationArrow size={"35px"} color="#F98FFD" />
              </div>
            </div>

            {/* chat */}
            <div className="hidden lg:flex absolute -top-16 -right-30 animate-bounce">
              <div className="rotate-180 absolute top-8 -left-8">
                <TiLocationArrow size={"35px"} color="#FBE11D" />
              </div>

              <p className="bg-[#FBE11D] py-2 px-10 font-medium rounded-full">
                Chat
              </p>
            </div>

            {/* replay */}
            <div className="hidden lg:flex absolute bottom-0 animate-bounce">
              <p className="bg-[#00ACDA] py-2 px-10 font-medium rounded-full">
                Replay
              </p>
              <div className="absolute bottom-8 -right-8">
                <TiLocationArrow size={"35px"} color="#00ACDA" />
              </div>
            </div>

            {/* meeting */}
            <div className="hidden lg:flex absolute -right-20 -bottom-10 animate-bounce">
              <div className="rotate-[-95deg] absolute bottom-8 -left-8">
                <TiLocationArrow size={"35px"} color="#34A853" />
              </div>

              <p className="bg-[#34A853] py-2 px-10 font-medium rounded-full">
                Meeting
              </p>
            </div>
          </div>

          <p className="mt-8 lg:mt-14 sm:text-lg/relaxed">
            Meet InboxAssistant, the AI that scans your inbox, organizes
            meetings, and sends responses automatically more short this sentence
          </p>

          {/* CTA's */}
          <div className="mt-8 flex flex-col md:flex-row w-full justify-center gap-4">
            <Link
              className="relative block w-full rounded-full px-15 py-5 text-sm font-medium text-white shadow-sm hover:bg-[#00ACDA]/90 "
              href="/dashboard"
            >
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#00ACDA] to-[#43D4FB]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E9E9E9] text-[#252525] hover:text-[#00ACDA]">
                  Join the Waiting List
                </span>
              </span>
            </Link>

            <Link
              className="block w-full rounded-full px-12 py-3 text-sm font-medium  focus:outline-hidden link-btn"
              href="/dashboard"
            >
              Login
            </Link>
          </div>
        </div>

        {/* providers */}
        <AllProviders />
      </div>
    </section>
  );
}
