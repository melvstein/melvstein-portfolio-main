import Image from "next/image";
import HomeSection from "./components/sections/HomeSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
            <HomeSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
    </main>
  );
}
