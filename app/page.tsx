"use client";

import { useState } from "react";
import Image from "next/image";
import Guidelines from "./Guidelines";
import GridScale from "./GridScale";
import TransformScale from "./TransformScale";

export default function Home() {
  const [activeTab, setActiveTab] = useState(""); // No tab shown initially

  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        <div className="btnSection flex gap-4">
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("guidelines")}>
            Guidelines
          </div>
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("gridscale")}>
            Grid Scale
          </div>
          <div className="btnView cursor-pointer" onClick={() => setActiveTab("transformscale")}>
            Transform Scale
          </div>
        </div>

        {/* Conditionally render only the selected component */}
        {activeTab === "guidelines" && <Guidelines />}
        {activeTab === "gridscale" && <GridScale />}
        {activeTab === "transformscale" && <TransformScale />}
      </main>
    </>
  );
}
