import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import assets from "../assets";

const navigation = [
  { name: "Home", path: "home" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "About Me", path: "about" },
  { name: "Contact Me", path: "contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="  ">
      <header className="fixed  inset-x-0 top-0 z-50">
        <nav
          className=" bg-white shadow-md flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 flex-row">
            <ScrollLink
              to="home"
              className="-m-1.5 p-1.5 cursor-pointer"
              onClick={scrollToTop}
            >
              <img
                className="h-8 w-auto"
                src={assets.Logo_name}
                alt=""
              />
            </ScrollLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.path}
                spy={true}
                smooth={true}
                offset={55} // Adjust the offset as needed
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <ScrollLink
                to="home"
                className="-m-1.5 p-1.5 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                <img
                  className="h-8 w-auto"
                  src={assets.Logo}
                  alt=""
                />
              </ScrollLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.path}
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust the offset as needed
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
