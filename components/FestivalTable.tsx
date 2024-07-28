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
import { Card, CardContent } from "./ui/card";

export async function FestivalTable() {
  const festivals = await db.select().from(festivalTable);
  console.log(festivals);

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>A list of festivals and shows</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Festival Name</TableHead>
              <TableHead>Festival Start Date</TableHead>
              <TableHead>Festival End Date</TableHead>
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
      </CardContent>
    </Card>
  );
}
