"use client";
import React, { useState } from "react";
import Lucide from "../icons/Lucide";

function FullScreenButton() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      // Exit fullscreen
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      // Trigger the same action as onClick on Enter or Space key press
      toggleFullScreen();
    }
  };

  return (
    <button
      className="h-full w-full flex justify-center items-center cursor-pointer"
      onClick={toggleFullScreen}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Lucide
        name={isFullScreen ? "Minimize" : "Maximize"}
        className="h-4 w-4"
      />
    </button>
  );
}

export default FullScreenButton;
