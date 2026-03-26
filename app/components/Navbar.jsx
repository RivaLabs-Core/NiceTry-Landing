'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Navbar() {
  const path = usePathname()

  return (
     <nav className="relative z-10 flex w-full items-center justify-between h-[64px] animate-fade-in-up px-9">
         <div className="flex items-center gap-2">
             <div className="size-8">  <Image width={1000} height={1000} priority src={'/logo.svg'} alt=""  className="w-full h-full"/> </div>
   
         </div>
   
         <ul className="flex items-center gap-2">
          
           <li>
             <div className="flex flex-col items-center justify-center gap-2">
               <Link
                 href="/"
                 className="text-xs font-medium tracking-wide transition-opacity text-nt-cream/85 hover:text-nt-cream"
               >
                 Home
               </Link>
               <div className={`h-3 -skew-x-40 border w-[120px] ${path === '/' ?'bg-white':''}`}/>
             </div>
           </li>
            <li>
             <div className="flex flex-col items-center justify-center gap-2">
               <Link 
                 href="/try-out-demo"
                 className="text-xs font-medium tracking-wide transition-opacity text-nt-cream/85 hover:text-nt-cream"
               >
                 Try our demos
               </Link>
                <div className={`h-3 -skew-x-40 border w-[120px] ${path === '/try-out-demo' ?'bg-white':''}`}/>
             </div>
           </li>
         </ul>
   
         <div className="items-center hidden gap-4 sm:flex ">
          <a href="#" className="text-xs font-medium tracking-wide transition-opacity text-nt-cream/85 hover:text-nt-cream">Docs</a>
           <a
             href="#"
             className="text-xs font-medium tracking-wide transition-opacity text-nt-cream/85 hover:text-nt-cream"
           >
             Github
           </a>
           <a href="#" className="transition-opacity text-nt-cream/85 hover:text-nt-cream">
             <div className="h-[18px] w-[18px]" >
               <svg
  
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
             </div>
           </a>
         </div>
       </nav>
  );
}
