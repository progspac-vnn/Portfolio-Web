import Image from "next/image";
import Banner from "@/components/home-page/Banner";
import Projects from "@/components/home-page/Projects";
import WorkExperience from "@/components/home-page/WorkExperience";
import Skills from "@/components/home-page/Skills";

export default function Home() {
  return (
    <div className="bg-[#060608] px-5">
      <Banner/>
      <Projects />
      <WorkExperience />
      <Skills />
    </div>
  );
}
