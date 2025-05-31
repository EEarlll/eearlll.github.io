import { useState } from "react";
import Popup from "./Popup";
import About from "./About";
import Links from "./Links";
import Work from "./Work";
import { AboutSvg, LinksSvg, WorkSvg, FaQSvg, ContactsSvg } from "./IconSvg";
import Contacts from "./Contacts";
import AiChat from "./AiChat";
import { useTheme } from "./theme-provider";

const menuItems = [
  {
    id: "about",
    label: "About",
    sizeClassName: "max-w-3xl min-h-[564px]",
    initialPosition: "bottom-0 right-2",
    component: <About />,
    icon: <AboutSvg />,
  },
  {
    id: "links",
    label: "Links",
    sizeClassName: "max-w-lg min-h-[124px]",
    initialPosition: "bottom-0 left-2",
    component: <Links />,
    icon: <LinksSvg />,
  },
  {
    id: "work",
    label: "Work",
    sizeClassName: "max-w-4xl min-h-[564px]",
    initialPosition: "top-2 right-2",
    component: <Work />,
    icon: <WorkSvg />,
  },
  {
    id: "contacts",
    label: "Contacts",
    sizeClassName: "max-w-lg min-h-[304px]",
    initialPosition: "bottom-0 right-[20%] left-[20%]",
    component: <Contacts />,
    icon: <ContactsSvg />,
  },
  {
    id: "chat",
    label: "Chat",
    sizeClassName: "max-w-3xl min-h-[564px]",
    initialPosition: "top-2 left-2",
    component: <AiChat />,
    icon: <FaQSvg />,
  },
];

export default function MainTab() {
  const [openPopupid, setOpenPopupid] = useState(new Set<string>());
  const { playSharedClick } = useTheme();

  const togglePopup = (id: string) => {
    setOpenPopupid((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="font-bold hidden md:block bg-accent dark:bg-background text-white dark:text-text border-b-2 border-b-accent p-3 h-full">
        home
      </div>
      <div className="flex flex-1">
        <div className="flex items-center justify-center m-auto p-4 rounded">
          <div className="text-center">
            <h1 className="md:text-7xl mb-4 text-5xl text-text">
              hi! <span className="text-secondary font-semibold">i’m Earl</span>
            </h1>
            <p className="md:text-2xl text-lg font-light text-text">
              developer and programmer
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 pt-16 justify-center items-center">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer transition hover:scale-105 duration-200 flex flex-col justify-center items-center p-2 rounded md:rounded-none border-accent border md:border-0 bg-background md:bg-transparent w-18 md:w-auto text-text"
                  onClick={() => {
                    togglePopup(item.id);
                    playSharedClick();
                  }}
                >
                  {item.icon}
                  <p className="font-bold">{item.label}</p>
                </div>
              ))}
              {menuItems.map((item) => (
                <Popup
                  key={item.id}
                  isOpen={openPopupid.has(item.id)}
                  onClose={() => togglePopup(item.id)}
                  title={item.label}
                  sizeClassName={item.sizeClassName}
                  initialPosition={item.initialPosition}
                >
                  {item.component}
                </Popup>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
