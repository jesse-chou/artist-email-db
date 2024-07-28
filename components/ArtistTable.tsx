import { db } from "@/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { artistTable } from "@/db/schema";
import { Card, CardContent } from "./ui/card";

export async function ArtistTable() {
  const artistData = await db.select().from(artistTable);

  return (
    <Table>
      <TableCaption>A list of artists in the EDM industry</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Artist Name</TableHead>
          <TableHead>Manager Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {artistData.map((artist) => (
          <TableRow key={artist.id}>
            <TableCell className="font-medium">{artist.id}</TableCell>
            <TableCell className="font-medium">{artist.artistName}</TableCell>
            <TableCell className="font-medium">{artist.managerEmail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
