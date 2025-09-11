// import React from 'react';
// import Image from 'next/image';
// import styles from './BigLogoMarquee.module.css';

// interface BigLogoMarqueeProps {
//   logos: string[];
//   direction?: 'left' | 'right';
//   speed?: string;
// }

// const BigLogoMarquee: React.FC<BigLogoMarqueeProps> = ({
//   logos,
//   direction = 'left',
//   speed = '70s',
// }) => {
//   // Double the logos array to ensure continuous scrolling
//   const doubledLogos = [...logos, ...logos];
  
//   return (
//     <div className={`${styles.wrapper} ${styles[`wrapper--${direction}`]}`}>
//       <div 
//         className={`${styles.marquee} ${styles[`marquee--${direction}`]}`}
//         style={{ '--duration': speed } as React.CSSProperties}
//       >
//         <div className={styles.marquee__group}>
//           {doubledLogos.map((logo, index) => (
//             <div key={index} className={styles.logoItem}>
//               <Image src={logo} alt={`Company Logo ${index}`} width={384} height={240} objectFit="contain" priority />
//             </div>
//           ))}
//         </div>
//         <div aria-hidden="true" className={styles.marquee__group}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//           {doubledLogos.map((logo, index) => (
//             <div key={index} className={styles.logoItem}>
//               <Image src={logo} alt={`Company Logo ${index}`} width={384} height={240} objectFit="contain" priority />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BigLogoMarquee; 

"use client";
import Image from "next/image";

const companyLogos = [
  "/CompanyLogos/1.png",
  "/CompanyLogos/2.png",
  "/CompanyLogos/3.png",
  "/CompanyLogos/4.png",
  "/CompanyLogos/5.png",
  "/CompanyLogos/6.png",
  "/CompanyLogos/7.png",
  "/CompanyLogos/8.png",
  "/CompanyLogos/9.png",
  "/CompanyLogos/10.png",
  "/CompanyLogos/11.png",
  "/CompanyLogos/12.png",
  "/CompanyLogos/13.png",
  "/CompanyLogos/14.png",
  "/CompanyLogos/15.png",
  "/CompanyLogos/16.png",
  "/CompanyLogos/17.png",
  "/CompanyLogos/18.png",
  "/CompanyLogos/19.png",
  "/CompanyLogos/20.png",
  "/CompanyLogos/21.png",
  "/CompanyLogos/22.png",
  "/CompanyLogos/23.png",
  "/CompanyLogos/24.png",
  "/CompanyLogos/25.png",
  "/CompanyLogos/26.png",
  "/CompanyLogos/27.png",
  "/CompanyLogos/28.png",
  "/CompanyLogos/29.png",
  "/CompanyLogos/30.png",
];

export default function BigLogoMarquee() {
  const repeatedLogos = [...companyLogos, ...companyLogos]; // duplicate for seamless loop

  return (
    <div className="mt-10 md:mt-0 py-0 md:py-10 pb-0 relative w-full overflow-hidden">
      {/* Fade gradients */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

      {/* Track */}
      <div className="flex animate-marqueeSlow w-max">
        {repeatedLogos.map((logo, i) => (
          <div
            key={i}
            className=" mx-5 md:mx-8 flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-300"
          >
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={132}
              height={66}
              className="object-contain w-[100px] md:w-[132px] md:h-[66px]"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
