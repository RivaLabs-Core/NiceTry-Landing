'use client'
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

 


function InfoSection() {
  return (
    <div className="absolute top-0 flex flex-col items-end gap-1 text-right right-8 animate-fade-in-right animation-delay-200 md:right-12">
      <p className="text-lg font-semibold tracking-wide text-nt-cream">
        {">"}<span className=" text-[#6C80FF]">Wallet</span> infrastructure
        built on <span className=" text-[#6C80FF]">Ephemeral Key</span> pairs
      </p>

      <p className="text-lg font-semibold tracking-wide text-nt-cream">
        {">"} <span className=" text-[#6C80FF]">Quantum-safe</span> by design
      </p>
    </div>
  );
}


function CentreContent() {

 
  

  useEffect(() => {
    gsap.to('.logo', {
      rotate: 90,
      duration: 1,
      delay:.3
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center flex-1 w-full ">
      <div className="relative flex items-center justify-center w-full animate-scale-in animation-delay-400 ">
        <div className="absolute w-289.5 h-68.75 top-1/2 -translate-y-1/2">
          <Image src={"/nicetry.png"} alt="log" fill priority />
        </div>
        <div className="absolute w-[343px] h-[182px] lg:w-[791px] lg:h-[384px] sm:w-197.75 sm:h-96 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center ">
          <div className="absolute lg:top-0 lg:left-0 sm:top-10 sm:left-23  lg:w-[128px] lg:h-[128px]  top-4 left-4 sm:size-32 size-[50px] sm:w-[90px] sm:h-[101px]">
            {" "}
            <Image
              width={1000}
              height={1000}
              priority
              src={"/logo.svg"}
              alt=""
              className="w-full h-full rotate-0 logo"
            />{" "}
          </div>
          <div className="w-full  sm:h-[101px] h-12.5 lg:h-[128px]">
            <Image
              src={"/NiceTryText.svg"}
              alt="log"
              width={1000}
              height={1000}
              priority
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Button Container ───

function ButtonContainer() {
  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in-up animation-delay-600">
      {/* Live badge */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-nt-cream  w-full">
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-nt-blue-check">
          <span className="h-2 w-2 rounded-[2px] bg-nt-blue-accent" />
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="/try-our-demo"
          className="group border border-nt-cream p-1.5 transition-all"
        >
          <span className="  flex items-center justify-center bg-nt-blue-primary px-16 py-3 text-base font-bold uppercase tracking-wider text-nt-cream transition-all bg-[#3F56E3] group-hover:bg-[#5D73FF] group-hover:shadow-[0_0_30px_rgba(63,86,227,0.4)]">
            TRY OUR DEMOS
          </span>
        </a>

        <a
          href="https://docs.nicetry.xyz/"  target="_blank"
          className="group border border-nt-cream p-1.5 transition-all"
        >
          <span className="flex items-center justify-center  bg-transparent px-16 py-3 text-base font-bold uppercase tracking-wider text-nt-cream transition-all hover:bg-nt-cream/[0.06] hover:shadow-[0_0_20px_rgba(248,255,224,0.08)] hover:bg-white hover:text-[#5D73FF]">
            READ THE DOCS
          </span>
        </a>
      </div>
    </div>
  );
}

// ─── Main Page ───

export default function NiceTryLanding() {
  return (
    <div className="relative w-full overflow-hidden text-white px-9 ">
      {/* Background Layers */}
      <div
        style={{
          background: "linear-gradient(180deg, #182428 0%, #171622 100%)",
        }}
      >
        <Image
          fill
          priority
          src={"/background_grid.png"}
          alt="bg"
          className="absolute top-0 right-0 z-1"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-[5] flex min-h-[calc(100vh-90px)] flex-col items-center justify-center px-4 py-16  sm:border rounded-[32px]">
        <div className="relative flex items-center justify-between w-full ">
          <span className=" hidden md:flex lg:hidden z-[5] text-sm font-medium text-nt-cream/70 animate-fade-in-up animation-delay-800 uppercase">
            / riva.xyz
          </span>
          <InfoSection />
        </div>
        <CentreContent />
        <ButtonContainer />

        <a href="https://riva.xyz/"  target="_blank" className="  absolute lg:bottom-8 lg:left-20 md:hidden lg:flex bottom-5 left-1/2   -translate-x-1/2    z-[5] text-sm font-medium text-nt-cream/70 animate-fade-in-up animation-delay-800 ">
          / riva.xyz
        </a>
      </main>
    </div>
  );
}
