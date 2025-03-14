import { Button } from "@/components/ui/button";
import { SelectModel } from "../../dashboard/components/SelectModel";

export default function ChatHeader() {
  return (
    <div className="bg-[#F1F1F1] flex justify-between items-center p-6 rounded-lg mb-6 sticky top-0">
      <SelectModel />
      <Button
        variant="blueGradient"
        className="cursor-pointer text-white px-10 py-6 rounded-xl"
      >
        Upgrade Plan
      </Button>
    </div>
  );
}
