import React from "react";

interface IUseWindow {
  width: number | undefined;
  height: number | undefined;
}

export function useWindow(): IUseWindow {
  const [windowSize, setWindowSize] = React.useState<IUseWindow>({
    width: undefined,
    height: undefined
  });

  React.useEffect(() => {

    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return windowSize;
}