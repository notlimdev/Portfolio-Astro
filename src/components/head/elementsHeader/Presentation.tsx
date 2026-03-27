import { personalInfo } from "@data/personal-info";

export default function Presentation() {
  return (
    <div className="flex w-[70%] h-3/4 absolute top-20 sm:top-12 lg:top-24">
      <div
        className="basis-[95%] text-white relative top-20 space-y-10 p-10
                      max-sm:top-5 max-sm:space-y-1 max-sm:p-4
                      sm:top-0
                      md:top-10
                      2xl:p-16"
      >
        <h1
          className="text-7xl
                       max-sm:text-lg
                       sm:text-2xl
                       md:text-4xl
                       lg:text-5xl
                       2xl:text-7xl"
        >
          Hello 👋 my name <br />
          <span
            className="font-extrabold bg-clip-text text-transparent
                           bg-linear-to-r from-green-500 to-yellow-500
                           text-8xl
                           max-sm:text-xl
                           sm:text-4xl
                           md:text-5xl
                           lg:text-6xl
                           2xl:text-8xl"
          >
            is {personalInfo.name}
          </span>
        </h1>

        {/* Mobile: descripción corta / Desktop: descripción larga */}
        <p className="lg:text-xl max-sm:text-sm block sm:hidden">
          {personalInfo.shortBio}
        </p>
        <p className="lg:text-xl hidden sm:block">{personalInfo.longBio}</p>
      </div>
    </div>
  );
}
