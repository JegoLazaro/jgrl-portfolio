import assets from "../assets";

const HeaderComp = ({ title, description, reverse, isCloud, clear }) => {
  return (
    <div
      id="skills"
      className={` ${
        reverse ? "bg-slate-400" : "bg-slate-400"
      } fadeTopMini py-20 sm:py-20 `}
    >
      {isCloud ? (
        <div className=" items-center justify-center px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Built using the following technologies
          </h2>
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src={assets.vercel_cloud}
              alt="Figma"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={assets.react_cloud}
              alt="React JS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
              src={assets.tailwindcss_cloud}
              alt="TailwindCSS"
              width={168}
              height={78}
            />
            <img
              className="col-span-2 max-h-8 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={assets.formspree_cloud}
              alt="NodeJS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-8 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={assets.git_cloud}
              alt="Git"
              width={158}
              height={48}
            />
          </div>
        </div>
      ) : (
        <>
          {clear ? (
            <div
              className="absolute -z-50 overflow-hidden blur-3xl sm:-top-50"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-45 sm:left-[calc(50%-32rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          ) : null}

          <div
            className={`mx-auto max-w-7xl px-6 lg:px-8 flex ${
              reverse ? " justify-center" : "justify-start"
            }`}
          >
            <div className="max-w-2xl">
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl flex ${
                  reverse ? "justify-center" : "justify-start selection:"
                } `}
                style={{
                  color: reverse ? "#fff0ff" : "#0071A1",
                }}
              >
                {title}
              </h2>
              <p
                className="mt-2 mb-4 text-justify text-lg leading-8"
              >
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderComp;
