import { Button } from "@/components/ui/button";
import SearchBar from "./components/SearchBar";
import { RiInbox2Line } from "react-icons/ri";
import EmailsContainer from "./components/EmailsContainer";
import { EmailPagination } from "./components/EmailPagination";

export default async function HomePage() {
  return (
    <section className="bg-[#F1F1F1] rounded-[15px] lg:rounded-[20px] p-6 lg:p-8 flex flex-col h-[650px] lg:max-h-[740px] lg:h-full">
      <SearchBar />
      <Button
        variant="blueGradient"
        className="cursor-pointer py-2 px-5 rounded mt-8 mb-5 w-fit"
      >
        <RiInbox2Line />
        All
      </Button>
      {/* <div className=" flex flex-col justify-between"> */}
      <EmailsContainer />
      <EmailPagination />
      {/* </div> */}
    </section>
  );
}
