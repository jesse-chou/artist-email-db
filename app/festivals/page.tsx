import { FestivalForm } from "@/components/FestivalForm";
import { FestivalTable } from "@/components/FestivalTable";

export default function FestivalPage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>Festival Database</h1>
      <FestivalForm />
      <FestivalTable />
    </div>
  );
}
