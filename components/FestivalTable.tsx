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
import { festivalTable } from "@/db/schema";

export async function FestivalTable() {
  const festivals = await db.select().from(festivalTable);
  console.log(festivals);

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
        {festivals.map((festival) => (
          <TableRow key={festival.id}>
            <TableCell className="font-medium">{festival.id}</TableCell>
            <TableCell className="font-medium">
              {festival.festivalName}
            </TableCell>
            <TableCell className="font-medium">
              {festival.festivalStartDate}
            </TableCell>
            <TableCell className="font-medium">
              {festival.festivalEndDate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
