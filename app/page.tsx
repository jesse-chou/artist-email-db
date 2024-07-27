import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Artist Email Database</h1>
      <br />
      <div className="flex flex-col">
        <h2>Artist Database</h2>
        <Button className="mt-10">
          <Link href="/artists">Artist DB</Link>
        </Button>
        <h2>Festival Database</h2>
        <Button className="mt-10">
          <Link href="/festivals">Festival DB</Link>
        </Button>
      </div>
    </main>
  );
}
