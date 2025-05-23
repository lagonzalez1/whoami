import Image from "next/image";
import HomepageToolbar from "./Components/Toolbar/HomepageToolbar";
import HomepageBanner from "./Components/Banner/HomepageBanner";
import { ProjectCards } from "./Components/Cards/ProjectCards";
import HomepageHero from "./Components/Hero/HomepageHero";

export default function Home() {
  return (
    <section>
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-3 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <HomepageToolbar /> {/* Will go in the first grid row */}
        <main className="flex flex-col gap-[120px] row-start-2 items-center sm:items-start">
          <HomepageBanner />
          <HomepageHero />
        </main>
        
        {/* Optional third row content, like a footer */}
      </div>
    </section>

  );
}
