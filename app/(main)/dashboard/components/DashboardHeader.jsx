import { Button } from "@/components/ui/button";
import { SelectModel } from "./SelectModel";

export default function DashboardHeader() {
  return (
    <div className="bg-[#F1F1F1] flex justify-between items-center p-6 rounded-lg">
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
