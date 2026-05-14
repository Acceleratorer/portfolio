import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { ProductSystem } from "@/components/sections/ProductSystem";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import HeroScene from "@/components/motion/HeroScene";

export default function HomePage() {
  return (
    <main>
      <HeroScene />
      <ProductSystem />
      <About />
      <DashboardPreview />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
