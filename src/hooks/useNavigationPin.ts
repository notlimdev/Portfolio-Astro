// src/hooks/useNavigationPin.ts
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineNavigation } from "@store/store-timeline-havigation";

export function useNavigationPin() {
  const navsection = useRef<HTMLDivElement>(null);
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs);
  const setTimelineNav = useTimelineNavigation((state) => state.setTimeline);

  useGSAP(
    () => {
      if (!navsection.current || !sectionsDivRef["Projects"]?.current) return;

      const projectRefElement = sectionsDivRef["Projects"].current!;
      const timeline = gsap.timeline();

      timeline.to(navsection.current, {
        scrollTrigger: {
          trigger: navsection.current,
          start: "top top",
          endTrigger: projectRefElement,
          end: "bottom bottom",
          pinSpacing: false,
          pin: true,
          anticipatePin: 1,
          scrub: 3,
          toggleClass: "stylenav",
          id: "navigation",
          onEnter: () => {
            navsection.current?.classList.add(
              "bg-white/30",
              "backdrop-blur-sm",
              "rounded-3xl",
            );
          },
          onLeaveBack: () => {
            navsection.current?.classList.remove(
              "bg-white/30",
              "backdrop-blur-sm",
            );
          },
        },
        onStart: () => ScrollTrigger.getById("horizontalsctoll")?.refresh(),
      });

      setTimelineNav(timeline);
    },
    { dependencies: [navsection, sectionsDivRef["Projects"]] },
  );

  return navsection;
}
