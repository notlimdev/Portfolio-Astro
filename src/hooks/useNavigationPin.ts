import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useDivRefsStore } from "@store/store-sections";
import { useTimelineNavigation } from "@store/store-timeline-havigation";

export function useNavigationPin() {
  const navsection = useRef<HTMLDivElement>(null);
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs);
  const setTimelineNav = useTimelineNavigation((state) => state.setTimeline);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 640;
      const trigger = ScrollTrigger.getById("navigation");
      isMobile ? trigger?.disable() : trigger?.enable();
      if (!isMobile) trigger?.refresh();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      if (!navsection.current || !sectionsDivRef["Projects"]?.current) return;

      ScrollTrigger.getById("navigation")?.kill();

      const projectRefElement = sectionsDivRef["Projects"].current!;
      const timeline = gsap.timeline();
      const sectionsporfolio = navsection.current.querySelectorAll("ul");
      const btnsections = navsection.current.querySelectorAll("button");

      timeline.to(navsection.current, {
        scrollTrigger: {
          trigger: navsection.current,
          start: "top 10px",
          endTrigger: projectRefElement,
          end: "bottom bottom",
          pinSpacing: false,
          pin: true,
          anticipatePin: 1,
          scrub: 3,
          toggleClass: "stylenav",
          id: "navigation",
          refreshPriority: 5,
          invalidateOnRefresh: true,
          onEnter: () => {
            navsection.current?.classList.remove("2xl:justify-start");
            sectionsporfolio.forEach((btn) => {
              btn.classList.remove("2xl:left-20");
            });
            navsection.current?.classList.add(
              "bg-white/30",
              "backdrop-blur-sm",
              "rounded-3xl",
              "2xl:justify-center",
            );
          },
          onLeaveBack: () => {
            navsection.current?.classList.remove(
              "bg-white/30",
              "backdrop-blur-sm",
              "2xl:justify-center",
            );
            navsection.current?.classList.add("2xl:justify-start");
            sectionsporfolio.forEach((btn) => {
              btn.classList.add("2xl:left-20");
            });
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
