import { FestivalForm } from "@/components/FestivalForm";
import { FestivalTable } from "@/components/FestivalTable";
import { CardTitle } from "@/components/ui/card";

export default function FestivalPage() {
  return (
    <div className="space-y-6">
      <CardTitle>Artist Database</CardTitle>
      <FestivalForm />
      <FestivalTable />
    </div>
  );
}
