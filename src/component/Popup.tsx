import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useZIndexManager from "./useZIndexManager";
import { useTheme } from "./theme-provider";

type DraggablePopupsProp = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  sizeClassName?: string;
  initialPosition?: string;
};

export default function Popup({
  isOpen,
  onClose,
  children,
  title,
  sizeClassName,
  initialPosition,
}: DraggablePopupsProp) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { bringToFront, zIndex } = useZIndexManager();
  const [LocalzIndex, setLocalZIndex] = useState(zIndex);
  const [visible, setVisible] = useState(isOpen);
  const [animateout, setAnimateout] = useState(false);
  const { playSharedClick } = useTheme();

  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const popupRef = useRef<HTMLDivElement | null>(null);
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - startPos.current.x,
        y: e.clientY - startPos.current.y,
      });
    },
    [isDragging]
  );

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    const topZ = bringToFront();
    setLocalZIndex(topZ);
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setAnimateout(false);
      const topZ = bringToFront();
      setLocalZIndex(topZ);
    } else {
      setAnimateout(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setPosition({ x: 0, y: 0 });
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove]);

  if (!visible) return null;

  return (
    <>
      {/* Mobile View */}
      <div
        className={`fixed inset-0 h-full min-w-full z-50 flex flex-col md:hidden
          ${animateout ? "animate-slide-down" : "animate-slide-up"}`}
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-[14px] bg-background/60 backdrop-blur-[0.5px]"></div>
        <div className="flex border-y border-accent  bg-accent dark:bg-background text-white dark:text-text p-3 justify-between items-center rounded-t-lg">
          <p className="font-bold">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer gap-1 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-125"
          >
            <p className="text-xl">[ x ]</p>
          </button>
        </div>
        <div className="overflow-y-auto flex-grow bg-background">
          {children}
        </div>
      </div>
      {/* Desktop View */}
      <div
        className={`hidden md:block absolute ${initialPosition} w-full ${sizeClassName} rounded-xl max-h-[564px] mb-16 md:border-2 border-accent bg-background shadow-customShadow dark:shadow-customShadowDark overflow-hidden
          ${
            animateout
              ? "transition duration-[250ms] opacity-0 scale-85"
              : "animate-fade-in-scale"
          }`}
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: LocalzIndex,
        }}
      >
        <div
          className="p-3 h-full flex justify-between cursor-grab bg-accent dark:bg-background text-white dark:text-text border-b-2 border-b-accent"
          onMouseDown={onMouseDown}
        >
          <p className="font-bold">{title}</p>
          <button
            onClick={() => {
              playSharedClick();
              onClose();
            }}
            className="cursor-pointer gap-1 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-125"
          >
            <p className="text-xl">[ x ]</p>
          </button>
        </div>
        <div className="flex flex-1 flex-col text-left overflow-y-auto max-h-[516px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#424242] scrollbar-track-[#fffdf5] dark:scrollbar-thumb-[#bdbdbd] dark:scrollbar-track-[#0a0800]">
          {children}
        </div>
      </div>
    </>
  );
}
