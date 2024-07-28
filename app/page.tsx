import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <CardTitle>Artist Email Database</CardTitle>
      <br />
      <Card>
        <CardTitle>Artist Database</CardTitle>
        <CardContent>
          <Button className="mt-10">
            <Link href="/artists">Artist DB</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
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
