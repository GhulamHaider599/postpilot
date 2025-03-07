
"use client"
import Directmail from "@/components/Directmail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProfitGenerating from "@/components/ProfitGenerating";
import Trusted from "@/components/Trusted";
import { useEffect } from "react";

export default function Home() {
   // Add smooth scroll effect when clicking on nav links
   useEffect(() => {
    const links = document.querySelectorAll(".scroll-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust based on navbar height
                    behavior: "smooth",
                });
            }
        });
    });

    return () => {
        links.forEach(link => link.removeEventListener("click", () => {}));
    };
}, []);

  return (
    <>
    <Header  />
    <HeroSection />
    <Trusted />
    <Directmail />
    <ProfitGenerating />
    
    <Footer />
    </>
  );
}
