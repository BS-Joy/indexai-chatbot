import { Button } from "@/components/ui/button";
import SearchBar from "./components/SearchBar";
import { RiInbox2Line } from "react-icons/ri";
import EmailsContainer from "./components/EmailsContainer";
import { EmailPagination } from "./components/EmailPagination";

export default async function HomePage() {
  return (
    <section className="bg-[#F1F1F1] rounded-[20px] p-10 max-h-[81vh] h-screen">
      <SearchBar />
      <Button
        variant="blueGradient"
        className="cursor-pointer py-2 px-5 rounded mt-8 mb-5"
      >
        <RiInbox2Line />
        All
      </Button>
      <EmailsContainer />
      <EmailPagination />
    </section>
  );
}
