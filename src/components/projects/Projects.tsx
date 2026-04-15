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
      if (
        !projectsSectionRef.current ||
        !projectsContainerRef.current ||
        !panelsTrackRef.current
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const scrollDistance =
          panelsTrackRef.current!.scrollWidth -
          projectsContainerRef.current!.offsetWidth;

        if (scrollDistance <= 0) return;

        const projectsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            id: "projects-horizontal-scroll",
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        });

        projectsTimeline.to(panelsTrackRef.current, {
          x: -scrollDistance,
          ease: "none",
          force3D: true,
        });

        setProjectsTimeline(projectsTimeline);
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(panelsTrackRef.current, {
          clearProps: "transform",
        });
      });

      return () => {
        mm.revert();
      };
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
      className="flex w-full min-h-screen flex-col items-center justify-start gap-8 overflow-hidden px-4 py-12 sm:px-6 lg:gap-10 lg:px-10 lg:py-16"
      ref={projectsSectionRef}
    >
      <div className="flex w-full items-center justify-center">
        <h1 className="w-full max-w-350 border-y-2 border-dashed border-white/20 py-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h1>
      </div>
      <div
        id="Projects"
        className="flex w-full max-w-350 flex-col justify-center"
        ref={projectsContainerRef}
      >
        <section
          ref={panelsTrackRef}
          className="flex flex-col gap-5 lg:flex-row lg:gap-6"
        >
          {projectsData.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}
