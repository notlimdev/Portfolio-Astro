import { personalInfo } from "@data/personal-info";

export default function Presentation() {
  return (
    <div className="flex max-sm:w-full w-[70%] h-3/4 absolute max-sm:top-8  top-20 sm:top-12 lg:top-24">
      <div
        className="basis-[95%] text-white relative top-20 space-y-10 p-10
                      max-sm:top-2
                      max-sm:p-4
                      max-sm:space-y-0
                      sm:top-0
                      sm:space-y-5
                      sm:p-8
                      md:top-10
                      2xl:p-16"
      >
        <h1
          className="text-7xl
                       max-sm:text-lg
                       max-sm:p-2
                       sm:text-2xl
                       sm:p-2
                       md:text-4xl
                       lg:text-5xl
                       2xl:text-7xl"
        >
          Hola 👋 soy <br />
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
            {personalInfo.name}
          </span>
        </h1>

        {/* Mobile: descripción corta / Desktop: descripción larga */}
        <p className="lg:text-xl max-sm:border-b-2 max-sm:border-b-indigo-300 max-sm:rounded-3xl max-sm:p-2 max-sm:text-sm block sm:hidden">
          {personalInfo.shortBio}
        </p>
        <p className="lg:text-xl hidden sm:block border-b-2 border-b-indigo-300 rounded-3xl p-2">
          {personalInfo.longBio}
        </p>
      </div>
    </div>
  );
}
