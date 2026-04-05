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

  useGSAP(
    () => {
      if (!aboutRef?.current || !divrefheight?.current) return;

      ScrollTrigger.getById("model3d")?.kill();

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
          refreshPriority: 10,
          invalidateOnRefresh: true,
        },
      });

      setTimeline(timeline);
      return () => {
        timeline.scrollTrigger?.kill();
      };
    },
    { dependencies: [aboutRef, divrefheight] },
  );
}
