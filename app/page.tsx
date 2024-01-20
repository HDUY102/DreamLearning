import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/register">
        <Button variant="ghost">Register</Button>  
      </Link>
    </div>
  );
}
