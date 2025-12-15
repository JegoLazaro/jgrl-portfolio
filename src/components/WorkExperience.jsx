import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { PiCompassToolFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


import { Typewriter } from "react-simple-typewriter";
gsap.registerPlugin(ScrollTrigger);

const useResponsiveValue = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmallScreen;
};

const ExperienceItem = ({ step, isMobile }) => {
  const [startTyping, setStartTyping] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const textElement = containerRef.current;

      gsap.fromTo(
        textElement,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textElement,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
            onEnter: () => setStartTyping(true),
            // onUpdate: () =>setStartTyping(false)
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="expText step-details min-h-[100px]">
      <div
        className={`text-slate-500 text-justify text-pretty ${
          isMobile ? "text-[3.5lvw]" : "text-[2lvw]"
        }`}
      >
        {startTyping && (
          <Typewriter
            words={[step.details]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={20}
            deleteSpeed={2}
            delaySpeed={100}
          />
        )}
        {!startTyping && (
          <span className="opacity-0 select-none block">{step.details}</span>
        )}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const isMobile = useResponsiveValue();
  const workExp = [
    {
      img: <FaComputer className="text-slate-600 " size={30}/>,
      details: `Frontend Specialist bridging UX research and code implementation. Conducted Usability Research and applied findings to build a high-fidelity replica using ReactJS and React-Bootstrap. Spearheaded the design and frontend implementation of the company's user tracker system using ReactJS and Material UI, showcasing strong UI/UX proficiency.`,
      title: "Converge ICT Solutions Inc.",
      role: "Software Engineer Intern",
      timeline: "July - September 2022",
      imgPrev: "",
      vidPrev: "",
    },
    {
      img: <FiTool className="text-slate-600 " size={30}/>,
      details:
        "Technical Operations Specialist ensuring high service availability. Proficient in rapid troubleshooting and incident management using Kibana and Zabbix. Managed critical JIRA tickets, service restarts, and file transfers to maintain production continuity.",
      title: "Gallius Shared Services OPC",
      role: "Associate Product Support Engineer",
      timeline: "November 2023 - April 2024",
      imgPrev: "",
      vidPrev: "",
    },
    {
      img: <PiCompassToolFill className="text-slate-600 " size={30}/>,
      details:
        "Provided end-to-end development of a modern, responsive website for a small business, driving franchisor lead generation within two months. Responsible for full-cycle delivery, including Figma prototyping, React.js/Tailwind CSS development with GSAP animations, SEO implementation (Lighthouse 83+), and post-launch user tracking and enhancements.",
      title: "Order Lemon Tea PH",
      role: "Freelance Web Developer",
      timeline: "May - August 2025",
      imgPrev: "",
      vidPrev: "",
    },
    {
      img: <HiOutlineComputerDesktop className="text-slate-600 " size={30}/>,
      details:
        "Full-Stack Software Engineer specializing in scalable web applications, CRMs, and system integration. I design and build solutions using React/Next.js and Python FastAPI (TypeScript), managing hybrid databases (MySQL and MongoDB) and complex APIs. Proven experience optimizing performance, developing robust authentication, and automating business workflows.",
      title: "Boom AI Solutions",
      role: "Software Engineer",
      timeline: "May 2024 - Present",
      imgPrev: "",
      vidPrev: "",
    },
  ];

  useGSAP(() => {
    gsap.utils.toArray(".timeline-step").forEach((step) => {
      gsap.from(step, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: step,
          start: "top 60%",
          end: "bottom 40%",
          // scrub: true,
          // markers: true
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "-20% center",
        end: "90% center",
        // markers: true,
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="bg-slate-200 relative isolate my-10 py-40 w-full md:mt-40 mt-20 px-5 md:px-10"
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#1f6ac0] to-[#00c673] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="w-full h-full md:px-20 px-5">
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <h1 className="text-[7.5lvw] z-10 mt-32 font-sans font-light text-cyan-700 special-font uppercase tracking-wider text-pretty">
            Work Experience
          </h1>
        </div>
        <div className="mt-32 relative">
          <div className=" relative z-50 xl:space-y-32 space-y-10">
            {workExp.map((step, index) => (
              <div
                key={step.title}
                className={`flex ${isMobile ? "flex-col" : "flex-col-reverse"} md:flex-col xl:flex-row xl:gap-20 gap-10 justify-between`}
              >
                <div className="timeline-step xl:w-2/6">
                  <div className={`p-5 ${isMobile && "ml-12"} md:ml-10 rounded-4xl`}>
                    <h1
                      className={`font-semibold text-shadow-sm text-shadow-white text-pretty ${
                        isMobile ? "text-[4.5lvw]" : "text-[2lvw]"
                      } uppercase`}
                    >
                      {step.title}
                    </h1>
                    <h1
                      className={`font-semibold text-cyan-700 text-shadow-sm text-shadow-white text-pretty ${
                        isMobile ? "text-[3lvw]" : "text-[2.5lvw]"
                      } uppercase`}
                    >
                      {step.role}
                    </h1>
                    <h1
                      className={`font-semibold text-shadow-sm text-slate-400 text-shadow-white text-pretty text-[2.5lvw]`}
                    >
                      {step.timeline}
                    </h1>
                  </div>
                </div>
                <div className="xl:w-4/6 ">
                  {/* <div className="flex items-start">
                    <div className="absolute top-0 xl:left-[35vw] md:left-10 left-4 h-full flex justify-center z-20">
                      <div className="timeline absolute h-[106%] -top-10 w-20 md:w-34 bg-slate-200 z-30" />
                    </div>
                  </div> */}

                  <div className=" flex xl:gap-20 md:gap-10 gap-5 relative">
                    <div className="relative flex-none">
                      {index !== 3 && (
                        <div
                          className={`absolute w-[6px] ${
                            isMobile ? "h-[480%]" : "h-[300%]"
                          }  left-1/2 top-0 -translate-x-1/2 -z-10 bg-slate-400 `}
                        />
                      )}
                      <div className="z-10 rounded-md py-2 px-1 shadow-cyan-400 shadow-md flex justify-center items-center md:-translate-y-6 border-4 border-cyan-700 bg-[#57e3d7] overflow-hidden">
                        {step.img}
                      </div>
                    </div>
                    <ExperienceItem step={step} isMobile={isMobile} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#4ddaea] to-[#04a474] opacity-40 sm:left-[calc(50%-32rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
