import Image from "next/image";
import metaLogo from "../../assets/metalogo.svg"
import walletIcon from "../../assets/walletIcon.svg"
import curveFrame from "../../assets/curveFrame.svg"


/* ── Button component ── */
const DemoButton = ({ label, variant = "primary", href = "#" }) => {
  const isPrimary = variant === "primary";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
      <button
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
      </button>
    </a>
  );
};

/* ── Main Page ── */
export default function NiceTryLanding() {
  return (
   <div className="relative w-full overflow-hidden text-white px-9 ">
      <div style={{background: 'linear-gradient(180deg, #182428 0%, #171622 100%)'}}> 
          
          <Image fill priority src={'/background_grid.png'} alt="bg" className="absolute top-0 right-0 z-1"/>
       </div>
     

   

      {/* ── Main Content ── */}
      <main className="relative z-[5] flex min-h-[calc(100vh-90px)] flex-col items-center justify-center  py-16  ">
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
              <div className="relative z-10">
              <DemoButton label="Start demo" variant="primary" href="https://metamask.nicetry.xyz" />
              </div>
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
              <DemoButton label="Start demo" variant="secondary" href="https://demowallet.nicetry.xyz" />
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
        <a href="https://riva.xyz/"  target="_blank"  className="absolute bottom-8 left-8 text-sm text-[#F8FFE0]/50">
          / riva.xyz
        </a>
            <Image src={curveFrame} alt="pattern" className="absolute -left-[400px] hidden -translate-y-1/2 xl:flex top-1/2 w-[1200px] h-[220px] " />
            <Image src={curveFrame} alt="pattern" className="absolute rotate-x-180 rotate-y-180 -right-[430px] hidden -translate-y-1/2 xl:flex top-1/2 w-[1200px] h-[220px] " />
      </main>
    </div>
  );
}