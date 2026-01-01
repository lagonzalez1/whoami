import AboutMeHero from "./Components/Hero/AboutMeHero";
import AboutMeTimeline from "./Components/Timeline/AboutMeTimeline";
import SkillsContent from "./Components/Sections/SkillsContent";
import ProjectsContent from "./Components/Sections/ProjectsContent";

export default function Home() {
  return (
    <>
      <AboutMeHero />
      <SkillsContent />
      <AboutMeTimeline />
      <ProjectsContent />
    </>
  );
}