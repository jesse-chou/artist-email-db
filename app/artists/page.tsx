import { ArtistForm } from "@/components/ArtistForm";
import { ArtistTable } from "@/components/ArtistTable";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ArtistPage() {
  return (
    <div className="flex flex-row items-center">
      <Card>
        <ArtistForm />
      </Card>
      <Card>
        <CardTitle>Artist Database</CardTitle>
        <ArtistTable />
      </Card>
    </div>
  );
}
