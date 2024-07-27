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

export async function ArtistTable() {
  const data = await db.select().from(artistTable);

  console.log("data", data);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((artist) => (
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
