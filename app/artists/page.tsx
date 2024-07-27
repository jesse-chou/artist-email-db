import { ArtistForm } from "@/components/ArtistForm";
import { ArtistTable } from "@/components/ArtistTable";

export default function ArtistPage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>Artist Database</h1>
      <ArtistForm />
      <ArtistTable />
    </div>
  );
}
