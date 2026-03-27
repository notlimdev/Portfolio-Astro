// src/hooks/useScrollToSection.ts
import gsap from "gsap";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";
import { useTimelineProjectStore } from "@store/store-timeline-projects";

export function useScrollToSection() {
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs);
  const timelineAboutSection = useTimelineStore(
    (state) => state.timelineAboutSection,
  );
  const timelineProjectSection = useTimelineProjectStore(
    (state) => state.timelineProjectsSection,
  );

  const disableAboutSection = () => {
    const aboutMeSection = document.getElementById("About-Me");
    if (!timelineAboutSection || !aboutMeSection) return;
    timelineAboutSection.scrollTrigger?.disable();
    timelineAboutSection.pause();
    aboutMeSection.classList.replace("h-[500vh]", "h-[100vh]");
  };

  const enableAboutSection = () => {
    const aboutRef = sectionsDivRef["About-Me"];
    if (!aboutRef?.current || !timelineAboutSection?.scrollTrigger) return;
    aboutRef.current.classList.replace("h-[100vh]", "h-[500vh]");
    const currentScroll = window.scrollY;
    timelineAboutSection.scrollTrigger.enable(false);
    window.scrollTo(0, currentScroll);
  };

  const scrollToSection = (name: string) => {
    const target = sectionsDivRef[name];
    if (!target?.current) return;

    const isAbout = name === "About-Me";
    const isProjects = name === "Projects";
    const nav = gsap.timeline();

    if (isAbout) {
      timelineAboutSection?.scrollTrigger?.enable();
      document
        .getElementById("About-Me")
        ?.classList.replace("h-[100vh]", "h-[500vh]");
      nav.to(window, { duration: 2, scrollTo: target.current });
      return;
    }

    disableAboutSection();
    nav.to(window, {
      duration: 2,
      scrollTo: target.current,
      onComplete: () => {
        if (isProjects) {
          timelineProjectSection?.scrollTrigger?.enable();
        }
        enableAboutSection();
      },
    });
  };

  return scrollToSection;
}
