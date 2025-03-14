import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Send, Sparkles } from "lucide-react";
import { IoSend } from "react-icons/io5";
import { RiSparkling2Line } from "react-icons/ri";

export default function ChatSection() {
  const show = false;
  return (
    <section className="flex-1 p-8 bg-[#F1F1F1] max-h-[81vh] h-screen rounded-[20px]">
      <div className="mx-auto h-full">
        {/* Logo and Welcome */}
        {show && (
          <div className="flex flex-col justify-between">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-1">Inbox AI.</h1>
              <p className="text-gray-500">Your Email. Redefined</p>
              <h2 className="text-xl font-semibold mt-4">
                Welcome Konstantin!
              </h2>
            </div>

            <Separator className="mb-4 w-full" />

            <div className="mt-16 text-center flex flex-col items-center justify-center">
              <h2 className="text-4xl font-semibold">What can I help with?</h2>
              <div className="mt-8 max-w-2xl w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <RiSparkling2Line size={18} className="text-[#101010]" />
                  </div>
                  <Input
                    className="pl-10 pr-12 py-6 w-full bg-white rounded-lg border focus-visible:border-ring focus-visible:ring-[#101010] focus-visible:ring-[1px] placeholder:text-[#101010]"
                    placeholder="Ask Your Question"
                  />
                  <Button
                    className="absolute cursor-pointer inset-y-0 right-0 top-2 flex items-center pr-3 text-[#101010] hover:bg-transparent"
                    variant="ghost"
                  >
                    <IoSend size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message Blocks */}
        {!show && (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6 overflow-auto flex flex-col">
              <div className="flex justify-end">
                <Card className="bg-[#E6E6E6] p-4 w-fit shadow-none border-none">
                  <p className="text-[#707070]">
                    The Bible's main message can be understood as God's plan for
                    redemption and reconciliation with humanity. At its core, it
                    tells the story of
                  </p>
                </Card>
              </div>

              <Card className="bg-white p-4 shadow-none border-none">
                <p className="text-[#434343]">
                  The Bible's main message can be understood as God's plan for
                  redemption and reconciliation with humanity. At its core, it
                  tells the story of The Bible's main message can be understood
                  as God's plan for redemption and reconciliation with humanity.
                  At its core, it tells the story of The Bible's main message
                  can be understood as God's plan for redemption and
                  reconciliation with humanity.
                </p>
              </Card>

              <div className="flex justify-end">
                <Card className="bg-[#E6E6E6] p-4 w-fit shadow-none border-none">
                  <p className="text-[#707070]">
                    The Bible's main message can be understood as God's plan for
                    redemption and reconciliation with humanity. At its core, it
                    tells the story of
                  </p>
                </Card>
              </div>

              <Card className="bg-white p-4 shadow-none border-none">
                <p className="text-gray-700">
                  The Bible's main message can be understood as God's plan for
                  redemption and reconciliation with humanity. At its core, it
                  tells the story of The Bible's main message can be understood
                  as God's plan for redemption and reconciliation with humanity.
                  At its core, it tells the story of The Bible's main message
                  can be understood as God's plan for redemption and
                  reconciliation with humanity. At its core, it tells the story
                  of The Bible's main message can be understood as God's plan
                  for redemption and reconciliation
                </p>
              </Card>
            </div>

            {/* Question Input */}
            <div className="">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <RiSparkling2Line size={18} className="text-[#101010]" />
                </div>
                <Input
                  className="pl-10 pr-12 py-7 w-full bg-white rounded-lg border focus-visible:border-ring focus-visible:ring-[#101010] focus-visible:ring-[1px] placeholder:text-[#101010]"
                  placeholder="Ask Your Question"
                />
                <Button
                  className="absolute cursor-pointer inset-y-0 right-0 top-3 flex items-center pr-3 text-[#101010] hover:bg-transparent"
                  variant="ghost"
                >
                  <IoSend size={20} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
