import { useState, useEffect } from 'react';

function useScrollDirection(currentPage: number, setPage: React.Dispatch<React.SetStateAction<number>>) {
  const [scrollData, setScrollData] = useState<{ direction: "up" | "down" | null; count: number }>({
    direction: null,
    count: 0,
  });
  const MAX_PAGE = 4;
  let touchStartY: number | null = null;

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const newDirection = event.deltaY > 0 ? "down" : "up";

      setScrollData((prevData) => {
        if (
          (newDirection === "up" && currentPage > 1) ||
          (newDirection === "down" && currentPage < MAX_PAGE)
        ) {
          return {
            direction: newDirection,
            count: prevData.direction === newDirection ? prevData.count + 1 : 1,
          };
        }
        return prevData; // No state change if bounds are exceeded
      });
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0].clientY;
      if (touchStartY !== null) {
        const newDirection = currentY < touchStartY ? "down" : "up";

        setScrollData((prevData) => {
          if (
            (newDirection === "up" && currentPage > 1) ||
            (newDirection === "down" && currentPage < MAX_PAGE)
          ) {
            return {
              direction: newDirection,
              count: prevData.direction === newDirection ? prevData.count + 1 : 1,
            };
          }
          return prevData; // No state change if bounds are exceeded
        });

        touchStartY = currentY; // Update to allow consecutive scrolls in the same direction
      }
    };

    // Add listeners
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentPage]);

  console.log(scrollData)

  return scrollData;
}

export default useScrollDirection;
