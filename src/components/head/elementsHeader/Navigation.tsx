import { XMarkIcon } from "@heroicons/react/24/outline";
import { navPages } from "@data/navigation";
import { useScrollToSection } from "@hooks/useScrollToSection";
import { useNavigationPin } from "@hooks/useNavigationPin";

type NavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  const navsection = useNavigationPin();
  const scrollToSection = useScrollToSection();

  const handleNavClick = (name: string) => {
    scrollToSection(name);
    onClose();
  };

  return (
    <div
      ref={navsection}
      className={`stylenav navigation_links
                  flex flex-row justify-start items-center
                  w-4/6 relative
                  sm:gap-2 sm:left-0 sm:w-full sm:justify-center sm:uppercase
                  lg:gap-4 lg:left-8 lg:justify-center
                  2xl:justify-start
                  max-sm:gap-4
                  ${isOpen ? "navigationactive" : ""}`}
    >
      {/* Botón cerrar — solo mobile */}
      <div className="w-full flex justify-end mt-4 p-4 cursor-pointer sm:hidden">
        <XMarkIcon className="w-8 h-8" onClick={onClose} />
      </div>

      {navPages.map((page) => (
        <ul
          key={page.id}
          className="max-sm:bg-slate-700 max-sm:border-l-4
                     max-sm:border-l-cyan-200 max-sm:p-3
                     max-sm:w-full 2xl:relative 2xl:left-20"
        >
          <button
            className="text-white font-bold uppercase cursor-pointer
                       hover:text-slate-300
                       text-[12px] md:text-lg lg:text-2xl xl:text-3xl
                       hover:sm:border-b-2 hover:sm:border-b-slate-600"
            onClick={() => handleNavClick(page.name)}
          >
            {page.label}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Navigation;
