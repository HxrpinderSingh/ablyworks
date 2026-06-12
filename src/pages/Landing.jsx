import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoFeatures from "@/components/BentoFeatures";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";

export default function Landing() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenDemo={openDemo} />
      <main>
        <Hero onOpenDemo={openDemo} />
        <BentoFeatures />
        <ComparisonMatrix />
        <Testimonials />
        <FAQ onOpenDemo={openDemo} />
      </main>
      <Footer />
      <DemoForm open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
