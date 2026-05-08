import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DashboardPreview />
      <Contact />
    </main>
  );
}
