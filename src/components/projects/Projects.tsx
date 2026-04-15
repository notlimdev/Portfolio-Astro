import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "./elementsProjects/Card";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineProjectStore } from "@store/store-timeline-projects";
import { projectsData } from "@data/projects";

export default function Projects() {
  const panelsTrackRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const setDivRef = useDivRefsStore((state) => state.setDivRef);
  const setProjectsTimeline = useTimelineProjectStore(
    (state) => state.setTimeline,
  );

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");
      if (sections.length === 0 || !projectsSectionRef.current) return;

      const projectsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: `top top`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          id: "projects-horizontal-scroll",
          refreshPriority: 1,
          invalidateOnRefresh: true,
        },
      });

      projectsTimeline.to(sections, {
        xPercent: -(100 * (sections.length - 1)),
        ease: "none",
        force3D: true,
      });

      setProjectsTimeline(projectsTimeline);
    },
    { dependencies: [setProjectsTimeline], scope: projectsContainerRef },
  );

  useEffect(() => {
    if (projectsSectionRef.current) {
      setDivRef("Projects", projectsSectionRef);
    }
  }, [setDivRef]);

  return (
    <div
      className="flex flex-col justify-around items-center w-full min-h-screen hidden_overflow-project"
      ref={projectsSectionRef}
    >
      <div className="w-full flex flex-row justify-center items-center">
        <h1
          className="w-[90%] text-white text-4xl 
          font-bold text-center border-b-2 border-t-2 border-dashed"
        >
          Projects
        </h1>
      </div>
      <div
        id="Projects"
        className="h-[70%] w-[90%] flex flex-col justify-center"
        ref={projectsContainerRef}
      >
        <section ref={panelsTrackRef} className=" flex gap-2">
          {projectsData.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}
