import { ArtistForm } from "@/components/ArtistForm";
import { ArtistTable } from "@/components/ArtistTable";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ArtistPage() {
  return (
    <div className="space-y-6">
      <CardTitle className="">Artist Database</CardTitle>
      <Card className="p-5 max-w-screen-sm">
        <ArtistForm />
      </Card>
      <Card className="p-5">
        <ArtistTable />
      </Card>
    </div>
  );
}
