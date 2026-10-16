import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Manifesto />
    </>
  );
}
