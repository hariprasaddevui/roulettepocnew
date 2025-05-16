"use client";

import { useState } from "react";
import Image from "next/image";
import Guidelines from "./Guidelines";
import GridScale from "./GridScale";
import TransformScale from "./TransformScale";

export default function Home() {
  const [activeTab, setActiveTab] = useState(""); // No tab shown initially

  // Handler to close Guidelines tab
  const handleCloseGuidelines = () => {
    setActiveTab(""); // hide all tabs
  };

  return (
    <>
      <main>

        <div className="btnSection flex gap-4">
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("guidelines")}>
            Game Grid Specifications
          </div>
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("gridscale")}>
            Grid Scale Approach
          </div>
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("transformscale")}>
            Transform Scale Approach
          </div>

          <a className="btnView cursor-pointer" target="_blank" href="https://www.figma.com/design/EB877eqGKeQQbI8SVIyXcv/HelloRoulette?node-id=214-46623&p=f&t=BShHoGqS6lIAcvnh-0">
          Figma Screens Validation
          </a>
    
        </div>

        {/* Conditionally render only the selected component */}
        {activeTab === "guidelines" && <Guidelines onClose={handleCloseGuidelines} />}
        {activeTab === "gridscale" && <GridScale />}
        {activeTab === "transformscale" && <TransformScale />}
      </main>
    </>
  );
}
