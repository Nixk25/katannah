import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MUSIC } from "@/constants/MUSIC";
import Image from "next/image";

const MusicImages = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 425px)",
  });

  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current !== null && isDragging) {
      dragDelta.current = e.clientX - dragStartX.current;
    }
  };

  const handleMouseUp = () => {
    if (isDragging && Math.abs(dragDelta.current) > 50) {
      if (dragDelta.current > 0 && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (dragDelta.current < 0 && selectedIndex < MUSIC.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    }
    setIsDragging(false);
    dragStartX.current = null;
    dragDelta.current = 0;
  };

  return (
    <div
      className="relative w-2/3 h-[400px] sm:h-[800px] z-1 select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {MUSIC.map((music, index) => {
        const offset = index - selectedIndex;
        const translateX = offset * (isMobile ? 100 : 500);
        const translateY = offset * (isMobile ? 100 : 500);
        const scale = offset === 0 ? 1 : 0.5;

        return (
          <div
            key={index}
            className="absolute transition-all duration-500 ease-in-out cursor-pointer"
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              zIndex: MUSIC.length - Math.abs(offset),
              opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.5,
            }}
            onClick={() => {
              if (index === selectedIndex) {
                window.open(music.url, "_blank");
              } else {
                setSelectedIndex(index);
              }
            }}
          >
            <div className="relative select-none w-[45vw] min-[426px]:w-[60vw] max-w-[400px] sm:max-w-[600px] aspect-square">
              <Image
                src={music.albumCover}
                alt={music.name}
                className="w-full h-full object-cover rounded-3xl shadow-lg"
                fill
                sizes="(max-width: 768px) 80vw, 500px"
                draggable={false}
              />
            </div>
            <div>
              <span className="font-bold text-xl sm:text-3xl">
                {music.name}
              </span>
              <div className="flex gap-3 mt-2 ">
                <span className="rounded-full px-4 py-2 text-[10px] sm:text-sm border border-foreground">
                  {music.year}
                </span>
                <span className="rounded-full px-2 py-2 text-[10px] sm:text-sm border border-foreground">
                  {music.album}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MusicImages;
