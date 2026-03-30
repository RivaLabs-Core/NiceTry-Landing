'use client'
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import metaLogo from "../assets/metalogo.svg"
import walletIcon from "../assets/walletIcon.svg"
import curveFrame from "../assets/curveFrame.svg"
 


function InfoSection() {
  return (
    <div className="absolute top-0 flex flex-col items-end gap-1 text-right right-8 animate-fade-in-right animation-delay-200 md:right-12">
      <p className="text-lg font-semibold tracking-wide text-nt-cream">
        {">"} <span className=" text-[#6C80FF]">Wallet</span> infrastructure
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
              src={"/Logo.svg"}
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
          href="#try-out-demo"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('try-out-demo')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="group border border-nt-cream p-1.5 transition-all"
>
          <span className="  flex items-center justify-center bg-nt-blue-primary px-16 py-3 text-base font-bold uppercase tracking-wider text-nt-cream transition-all bg-[#3F56E3] group-hover:bg-[#5D73FF] group-hover:shadow-[0_0_30px_rgba(63,86,227,0.4)]">
            TRY OUR DEMO
          </span>
        </a>

        <a
          href="https://docs.nicetry.xyz"  target="_blank" 
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

const DemoButton = ({ label, variant = "primary" }) => {
  const isPrimary = variant === "primary";
  return (
    <div
      className={`group relative border-2 p-1.5 w-full md:w-[287px] ${
        isPrimary ? "border-[#3F56E3]" : "border-[#F8FFE0]"
      }`}
    >
      <div
        className={`p-3 flex items-center justify-center text-[16px] font-bold uppercase tracking-wider transition-opacity cursor-pointer ${
          isPrimary
            ? "bg-[#3F56E3] text-[#F8FFE0] hover:bg-[#5D73FF]"
            : "bg-[#F8FFE0] text-[#3C52D8] hover:text-black"
        }`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
};

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

        <span className="  absolute lg:bottom-8 lg:left-20 md:hidden lg:flex bottom-5 left-1/2   -translate-x-1/2    z-[5] text-sm font-medium text-nt-cream/70 animate-fade-in-up animation-delay-800 ">
         <a href="https://www.riva.xyz" target="_blank" className="cursor-pointer"> /riva.xyz</a>
        </span>
      </main>
            <div id="try-out-demo" className="relative z-[5] flex min-h-[calc(100vh-90px)] flex-col items-center justify-center  py-16  ">

                <div className="relative flex flex-col items-center gap-8">
                  {/* Cards row */}
                  <div className="relative flex flex-col items-center gap-8 lg:flex-row">
                    {/* Decorative corner frames */}
                   
        
                    {/* ── Metamask Card ── */}
                    <div className="bg-[#F8FFE0] rounded-[32px] w-full max-w-[450px] h-auto md:h-[640px] lg:p-12 p-8 flex flex-col justify-between relative overflow-hidden">
                      {/* Background grid pattern */}
                      {/* <GridPattern className="absolute inset-0 w-full h-full text-[#1a1a1a] opacity-10" /> */}
                      {/* Large watermark text */}
                       <div className="absolute  top-24 left-30 w-[459px] h-[109px]">
                      <Image src={'/nicetry.png'} alt="log" fill priority className="invert grayscale-100 brightness-200" />
        
                      </div>
        
                      {/* Logo */}
                      <div className="relative z-10 w-[170px] h-[41px] flex justify-start ">
                     <Image src={'/NiceTryText.svg'} alt="log" fill priority className="invert" />
                      </div>
        
                      {/* Content */}
                      <div className="relative z-10 flex flex-col gap-4 lg:mt-[50px] md:-mt-[10px] mt-[50px] mb-8">
                        <div className="w-[91px] h-[88px]"><Image src={metaLogo} className="w-full h-full" alt="metalogo"/></div>
                        <h2
                          className="text-[22px] font-bold text-[#1a1a1a] capitalize leading-[1.2]"
                        >
                          NiceTry With Metamask
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-[#1a1a1a] leading-[1.4] pr-8 xl:h-[100px]">
                          Users manually add each new ephemeral address, then sign the rotation userOp through the extension. Worse demo UX but a closer representation of the wallet interaction model.
                        </p>
                      </div>
        
                      {/* Button */}
                     <a href="https://metamask.nicetry.xyz/" target="_blank" rel="noopener noreferrer" className="block">
  <DemoButton label="Start  demo" variant="primary" />
</a>
                    </div>
        
                    {/* ── Standalone Card ── */}
                    <div className="bg-[#3F56E3] rounded-[32px] w-full max-w-[450px] h-auto md:h-[640px] lg:p-12 p-8 flex flex-col justify-between relative overflow-hidden">
                      {/* Background grid pattern */}
                      {/* <GridPattern className="absolute inset-0 w-full h-full text-white rotate-90 opacity-5" /> */}
                      {/* Large watermark text */}
                      <div className="absolute  top-24 left-30 w-[459px] h-[109px]">
                      <Image src={'/nicetry.png'} alt="log" fill priority className="brightness-300" />
        
                      </div>
        
                      {/* Logo */}
                      <div className="relative z-10 w-[170px] h-[41px] flex justify-start ">
                     <Image src={'/NiceTryText.svg'} alt="log" fill priority />
                      </div>
        
                      {/* Content */}
                                    <div className="relative z-10 flex flex-col gap-4 lg:mt-[50px] md:-mt-[10px] mt-[50px] mb-8">
        
                        <div className="size-[96px] rounded-full bg-[#6478E3] flex items-center justify-center">
                          <div className="size-[46px]"><Image src={walletIcon} className="w-full h-full" alt="walletIcon" /></div>
                        </div>
                        <h2
                          className="text-[22px] font-bold text-[#F8FFE0] capitalize leading-[1.2]"
                        >
                          NiceTry Demo Wallet
                        </h2>
                        <p className="text-[16px] text-[#F8FFE0] leading-[1.4] pr-8 xl:h-[100px]">
                          A self-contained demo of NiceTry's ephemeral key pair rotation with local key generation, transaction signing, and automatic rotation in the browser.
        
        
                        </p>
                      </div>
        
                      {/* Button */}
                      <div className="relative z-10">
                      <a href="https://demowallet.nicetry.xyz/" target="_blank" rel="noopener noreferrer" className="block">
  <DemoButton label="Start demo" variant="secondary" />
</a>
                      </div>
                    </div>
                  
                   
                  </div>
        
                  {/* Bottom link */}
                  <a
                    href="#"
                    className="text-[18px] font-semibold text-[#F8FFE0] underline tracking-wider hover:text-white transition-colors"
                  >
                    Watch the other demos
                  </a>
                </div>
        
                {/* Footer text */}
                <div className="absolute bottom-8 left-8 text-sm text-[#F8FFE0]/50">
                 <a href="https://www.riva.xyz" target="_blank" className="cursor-pointer"> /riva.xyz</a>
                </div>
                    <Image src={curveFrame} alt="pattern" className="absolute xl:-left-[400px] xxl:-left-[200px] hidden -translate-y-1/2 xl:flex top-1/2 w-[1200px] h-[220px] " />
                    <Image src={curveFrame} alt="pattern" className="absolute rotate-x-180 rotate-y-180 -right-[430px] hidden -translate-y-1/2 xl:flex top-1/2 w-[1200px] h-[220px] " />
         
            </div>
    </div>
  );
}
