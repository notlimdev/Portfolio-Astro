import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";
import { useTimelineProjectStore } from "@store/store-timeline-projects";
import { useLenisStore } from "@store/store-lenis";

export function useScrollToSection() {
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs);
  const timelineAboutSection = useTimelineStore(
    (state) => state.timelineAboutSection,
  );
  const timelineProjectSection = useTimelineProjectStore(
    (state) => state.timelineProjectsSection,
  );
  const lenis = useLenisStore((state) => state.lenis);

  const scrollToSection = (name: string) => {
    const target = sectionsDivRef[name];
    if (!target?.current) return;

    const isAbout = name === "About-Me";
    const isProjects = name === "Projects";
    const model3dTrigger = ScrollTrigger.getById("model3d");

    if (isAbout) {
      const triggerStart = model3dTrigger?.start ?? 0;

      lenis?.stop();
      model3dTrigger?.disable(false);
      timelineAboutSection?.progress(0).pause();
      window.scrollTo(0, triggerStart);

      gsap.delayedCall(0.1, () => {
        model3dTrigger?.enable(false);
        lenis?.start();
        ScrollTrigger.refresh();
      });
      return;
    }

    lenis?.stop();
    model3dTrigger?.disable(false);

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: target.current, autoKill: false },
      ease: "power2.inOut",
      onComplete: () => {
        model3dTrigger?.enable(false);
        lenis?.start();
        ScrollTrigger.refresh();

        if (isProjects) {
          timelineProjectSection?.scrollTrigger?.enable();
        }
      },
    });
  };

  return scrollToSection;
}
