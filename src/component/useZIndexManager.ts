import { useRef } from "react";

let globalZIndex = 1000;

export default function useZIndexManager() {
  const zIndexRef = useRef<number>(++globalZIndex);

  const bringToFront = () => {
    zIndexRef.current = ++globalZIndex;
    return zIndexRef.current;
  };

  return {
    zIndex: zIndexRef.current,
    bringToFront,
  };
}
