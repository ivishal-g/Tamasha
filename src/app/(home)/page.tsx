"use client";

import { useState } from "react";
import { Header } from "@/components/header";



import { Uploader } from "@/components/uploader";
import { TierSelector } from "@/components/tier-selector";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero-section";
// import { RoastOutput } from "@/components/roast-output";

export default function HomePage() {
  const [tier, setTier] = useState("go");
  const [fileName, setFileName] = useState("");

  return (
    <main className="relative min-h-screen text-white flex flex-col">

  {/* BACKGROUND GLOW */}
    <div className="relative h-screen inset-0 -z-10 overflow-hidden">
    <div className="hero-bg  "></div>
        <Header />
        <Hero />
    </div>
    
        <section className="max-w-xl mx-auto mt-20 w-full px-4">
            <Uploader fileName={fileName} setFileName={setFileName} />
            <TierSelector tier={tier} setTier={setTier} />

            <Button className="w-full mt-8 py-6 text-lg font-bold bg-orange-600 hover:bg-orange-700">
            Generate Roast ⚡
            </Button>

            {/* <RoastOutput roast={"Your roast will appear here"} /> */}
        </section>

      <Footer />
    </main>
  );
}