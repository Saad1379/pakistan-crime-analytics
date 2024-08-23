import Map from "@/components/Map";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Map />
    </main>
  );
}
