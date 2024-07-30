import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 flex-auto ">
      <CardTitle className="justify-center">Artist Email Database</CardTitle>
      <br />
      <Card className="p-4 w-fit">
        <CardTitle>Artist Database</CardTitle>
        <CardContent>
          <Button className="mt-10">
            <Link href="/artists">Artist DB</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="p-4 w-fit">
        <CardTitle>Festival Database</CardTitle>
        <CardContent>
          <Button className="mt-10">
            <Link href="/festivals">Festival DB</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
