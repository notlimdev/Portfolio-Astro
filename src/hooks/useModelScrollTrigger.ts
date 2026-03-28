import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";

export function useModelScrollTrigger() {
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs);
  const setTimeline = useTimelineStore((state) => state.setTimeline);

  const aboutRef = sectionsDivRef["About-Me"];
  const divrefheight = sectionsDivRef["divrefheight"];

  const refreshRelatedTriggers = () => {
    ScrollTrigger.getById("navigation")?.refresh();
    ScrollTrigger.getById("horizontalsctoll")?.refresh();
  };

  useGSAP(
    () => {
      if (!aboutRef?.current || !divrefheight?.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: divrefheight.current,
          start: "top top",
          end: () => "bottom+=500% center",
          endTrigger: divrefheight.current,
          scrub: 2,
          pin: aboutRef.current,
          anticipatePin: 2,
          id: "model3d",
        },
        onStart: refreshRelatedTriggers,
        onComplete: refreshRelatedTriggers,
      });

      setTimeline(timeline);
      return timeline;
    },
    { dependencies: [aboutRef, divrefheight] },
  );
}
