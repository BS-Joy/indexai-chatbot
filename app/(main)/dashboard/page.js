import { Button } from "@/components/ui/button";
import SearchBar from "./components/SearchBar";
import { RiInbox2Line } from "react-icons/ri";
import EmailsContainer from "./components/EmailsContainer";
import { EmailPagination } from "./components/EmailPagination";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import gmail from "@/public/gmail.png";
import meeting from "@/public/meeting.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KeywordSelector } from "./components/KeywordSelector";

export default async function HomePage() {
  const emails = [
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
    {
      provider: "Gmail",
      name: "Jone Doe",
      subject: "Meeting Update",
      date: "03/10/2025",
      preview: "Let's reschedule our meeting to 3 PM.",
    },
  ];
  return (
    // <section className="bg-[#F1F1F1] rounded-[15px] lg:rounded-[20px] p-6 lg:p-8 flex flex-col h-[650px] lg:max-h-[740px] lg:h-full">
    // <section className="bg-[#F1F1F1] rounded-[15px] lg:rounded-[20px] p-6 lg:p-8 flex flex-col h-[650px] lg:max-h-[740px] lg:h-full">
    //   <SearchBar />
    //   <Button
    //     variant="blueGradient"
    //     className="cursor-pointer py-2 px-5 rounded mt-8 mb-5 w-fit"
    //   >
    //     <RiInbox2Line />
    //     All
    //   </Button>
    //   <div className=" flex flex-col justify-between">
    //     <EmailsContainer />
    //     <EmailPagination />
    //   </div>
    // </section>
    <section className="flex flex-col ">
      {/* welcome messages */}
      <h1 className="text-[18px] mb-3">Hi John,</h1>
      <p className="inline-flex items-center gap-2">
        <FaCheckCircle color="#68D391" />
        Here's the latest. Let me know how I can help!
      </p>

      {/* statics */}
      <div className="flex mt-6 gap-16">
        {/* unread mails */}
        <div className="flex gap-3">
          <Image src={gmail} alt="gmail logo" className="size-11" />
          <div className="flex flex-col">
            <p className="text-[#A0AEC0]">Unread Emails</p>
            <h4 className="text-[#2D3748]">100</h4>
          </div>
        </div>

        {/* upcomming meetings */}
        <div className="flex gap-3">
          <Image src={meeting} alt="gmail logo" className="size-11" />
          <div className="flex flex-col">
            <p className="text-[#A0AEC0]">Unread Emails</p>
            <h4 className="text-[#2D3748]">10</h4>
          </div>
        </div>
      </div>

      {/* mails */}
      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-[#2D3748] text-2xl font-semibold mb-5">
            Your Top Recipients
          </h2>
          <KeywordSelector />
        </div>

        {/* emails table */}
        <div className="rounded-2xl border overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-200 p-6">
              <TableRow>
                <TableHead className="font-medium px-6 py-4">
                  Provider
                </TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Subject</TableHead>
                <TableHead className="font-medium">Date</TableHead>
                <TableHead className="font-medium">
                  Latest Message Preview
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emails.map((email, index) => (
                <TableRow key={index} className=" border-gray-200">
                  <TableCell className="py-3 pl-5">
                    <div
                      className={`flex items-center ${
                        index === emails?.length - 1 ? "" : "border-b pb-3"
                      } `}
                    >
                      <Image
                        src={gmail}
                        width={24}
                        height={24}
                        alt="Gmail"
                        className="mr-2"
                      />
                      {email.provider}
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div
                      className={` ${
                        index === emails?.length - 1 ? "" : "border-b pb-4"
                      }`}
                    >
                      {email.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={` ${
                        index === emails?.length - 1 ? "" : "border-b pb-4"
                      }`}
                    >
                      {email.subject}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={` ${
                        index === emails?.length - 1 ? "" : "border-b pb-4"
                      }`}
                    >
                      {email.date}
                    </div>
                  </TableCell>
                  <TableCell className="pr-5">
                    <div
                      className={` ${
                        index === emails?.length - 1 ? "" : "border-b pb-4"
                      }`}
                    >
                      {email.preview}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <EmailPagination />
      </div>
    </section>
  );
}
