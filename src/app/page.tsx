"use client"
import Image from "next/image";
import { FloatingNav } from "./component/utils/ui/floating-navbar";
import { PinContainer } from "./component/utils/ui/3d-pin";
import { motion } from "framer-motion";
import { AuroraBackground } from "./component/utils/ui/aurora-background";
import { Vortex } from "./component/utils/ui/vortex";
import { CardBody, CardContainer, CardItem } from "./component/utils/ui/3d-card";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./component/utils/ui/glowing-stars";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768); // Ubah angka 768 sesuai dengan breakpoint untuk mobile Anda
    };

    // Panggil handleResize saat pertama kali rendering dan saat ukuran layar berubah
    handleResize();
    window.addEventListener('resize', handleResize);

    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        className="h-4 w-4 text-white stroke-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    );
  };

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between p-25">
      <section>
      <Vortex
        backgroundColor="black"
        rangeY={5000}
        particleCount={500}
        baseHue={220}
        className="flex items-center flex-col justify-center h-[100vh] px-2 md:px-10 py-4"
      >
        <h1 className="text-white text-4xl md:text-7xl font-bold text-center px-5">
          I'm Sebastian
        </h1>
        <h3 className="text-white text-2xl md:text-2xl font-bold text-center px-5 mt-3">
        specializing in automotive product design.
        </h3>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Download CV
          </button>
          <button className="px-4 py-2 text-white">Contact Me</button>
        </div>

     
        
      </Vortex>
      </section>
      
      <section className="flex  flex-col justify-center h-[100vh] ">
      <div className="mt-5 flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg text-white max-w-7xl text-left">
          <div className="flex-shrink-0 w-40 h-40 md:w-80 md:h-80 relative mx-5 mt-5">
            <Image
              src="/images/hero.png" // Ganti dengan path gambar Anda
              alt="Team Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-4  mb-4 md:mb-0 md:mr-2">
            <h3 className="text-3xl md:text-5xl font-bold mb-2 ">About Me</h3>
            <p className="text-sm md:text-lg">
              We are a team of passionate developers and designers dedicated to
              creating personal websites that make you stand out. Our mission is
              to help you present yourself professionally online, ensuring you
              leave a lasting impression.
            </p>
            <p className="text-sm md:text-lg mt-3">
              <span className=" font-bold "> Email : </span><span> Sbastianlee@Gmail.com</span>
              
            </p>
            <p className="text-sm md:text-lg ">
              <span className=" font-bold "> phone : </span><span> 08212312323322</span>
              
            </p>
          </div>
         
        </div>
      </section>
      
      <section className="h-[100vh] justify-center">
  <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-5 my-5">
    My Service
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4">
    <GlowingStarsBackgroundCard className="m-3">
      <GlowingStarsTitle>Car Design</GlowingStarsTitle>
      <div className="flex justify-between items-end">
        <GlowingStarsDescription>
          The power of full-stack to the frontend. Read the release notes.
        </GlowingStarsDescription>
      </div>
    </GlowingStarsBackgroundCard>
    <GlowingStarsBackgroundCard className="m-3">
      <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
      <div className="flex justify-between items-end">
        <GlowingStarsDescription>
          The power of full-stack to the frontend. Read the release notes.
        </GlowingStarsDescription>
      </div>
    </GlowingStarsBackgroundCard>
    <GlowingStarsBackgroundCard className="m-3">
      <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
      <div className="flex justify-between items-end">
        <GlowingStarsDescription>
          The power of full-stack to the frontend. Read the release notes.
        </GlowingStarsDescription>
      </div>
    </GlowingStarsBackgroundCard>
    <GlowingStarsBackgroundCard className="m-3">
      <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
      <div className="flex justify-between items-end">
        <GlowingStarsDescription>
          The power of full-stack to the frontend. Read the release notes.
        </GlowingStarsDescription>
      </div>
    </GlowingStarsBackgroundCard>
    
  </div>
</section  >
{!isMobile && (
        <section className="h-[80vh]">
          {/* Konten yang hanya ditampilkan pada desktop */}
        </section>
      )}

<section className="h-[100vh] flex flex-col items-center ">
<h1 className="text-white text-4xl md:text-6xl font-bold text-center px-5 my-5">
    My Portofolio
  </h1>
  
</section>





       
     
    </main>
  );
}
