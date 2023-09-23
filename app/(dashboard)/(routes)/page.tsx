import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-medium text-gray-900">
        Welcome to believe learning platform!
      </h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
