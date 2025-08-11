"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const topAnchorRef = useRef<HTMLAnchorElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const leftBottomContentRef = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement)[]>([]);
  const rightColumnContentRef = useRef<HTMLDivElement[]>([]);
  const leftBottomContainerRef = useRef<HTMLDivElement>(null);



  return (
    <>
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Certificate Part 1</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Certificate in India: Everything You Need to Know
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            {/* <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}></h3> */}
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            A Trademark Registration Certificate is a legal document issued by the Indian Trademark Registry that certifies the successful registration of a trademark in India. The trademark certificate is proof of the exclusive ownership of the trademark and grants the trademark owner the absolute right to use the trademark for its goods and services. The certificate of trademark also shows the trademark’s official registration date, class of goods and services and the geographical region where the trademark is registered. The Trademark Registration Certificate is a valuable asset to the trademark owner and must be renewed to ensure its validity.
            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>What is Trademark Registration?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
            Trademark registration is the process of registering a trademark with the government to protect it from being used without permission. A trademark is an identifiable symbol or expression which identifies a source's products or services from those of others. Trademark registration in India is governed by the Trademarks Act 1999 and is administered by the Controller General of Patents, Designs, and Trademarks.
            Trademark registration and obtaining a trademark certificate is an important part of protecting a business’s intellectual property. It helps to prevent others from using a similar or identical trademark without permission. The registration process also serves to notify the public that a business owns a particular trademark, which can help deter infringement.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>What is a Trademark Certificate? </h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            A Trademark Certificate is an official legal document issued by the Indian Trademark Registry that confirms the successful registration of a trademark under the Trade Marks Act, 1999. This certificate serves as proof of exclusive ownership of the trademark, granting the owner the sole right to use it for their goods or services. It includes critical details such as the registration date, trademark class, and geographical scope of protection. The certificate is vital for protecting intellectual property, deterring unauthorized use, and enabling legal action against infringement. Additionally, it allows the owner to license or monetize the trademark and ensures nationwide recognition and enforcement of rights.
            </p>
            
            
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            A trademark certificate is a legal document issued by the Indian Trademark Registry that certifies the successful registration of a trademark in India.
            </p>
          </div>
          <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
            <Image 
              src="/delfyle-logo/delfyle-logo.png" 
              alt="Delfyle Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
            "Delfyle ensures smooth, successful trademark certificate with expert assistance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Benefits of Certificate of Trademark</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            A trademark registration certificate is a powerful tool for brand protection and helps avoid future costly disputes. It also offers a variety of benefits, such as exclusive rights to use the trademark, the ability to file a suit for trademark infringement and statutory damages for trademark infringement. Furthermore, it allows for a broader scope of protection for the trademark, including foreign countries.
            Protection of Unique Brand Name
            Registering a trademark provides you with exclusive rights to use the mark on goods and services in the class it is registered. This means that no other person or entity can use the same mark or any confusingly similar mark on similar goods and services. This certificate of trademark provides strong legal protection for the uniqueness of your brand name or logo.
            </p>
        </div>
      </div>
    </section>

    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Certificate Part 2</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Certificate in India: Everything You Need to Know Part 2
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Prevent Unauthorized Use</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            Once the trademark is registered, it can be used to prevent any third party from using it without authorization. This is especially important when someone tries to pass off their goods or services as those of the registered trademark owner. In such cases, the trademark owner can take legal action against the infringer and protect their rights.
            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Ability to License and Franchise</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
            One of the significant benefits of registering a trademark is that it allows the trademark owner to license and franchise their mark to third parties. This means the trademark owner can enter into commercial agreements with other parties, allowing them to use the mark in return for payment. It is a great way to monetize the trademark and grow the business.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Increased Brand Value</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            A registered trademark can help increase the value of a brand. This is because it gives the brand a unique identity and makes it easier for customers to identify the brand and its products and services. This can help increase the brand’s recognition and create a loyal customer base.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Increased Investment Opportunities</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            A registered trademark can be used as an asset to attract investors. This is because investors are more likely to invest in a business with a registered trademark, indicating that the company has taken steps to protect its intellectual property.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Protection in Foreign Markets</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            A trademark registration in India can also be used to protect the brand in foreign markets. This is because the registration provides exclusive rights to use the mark in India, which can be used as a basis for seeking protection in foreign countries.
            </p>
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            A registered trademark is a valuable asset that can be licensed, franchised, or sold, providing a new revenue stream for your business.
            </p>
          </div>
          <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
            <Image 
              src="/delfyle-logo/delfyle-logo.png" 
              alt="Delfyle Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
            "Protect your brand with a trademark registration certificate, securing exclusive rights and deterring potential infringers in India."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>How to Get a Trademark Certificate?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            Obtaining a Trademark Registration Certificate is an important step in protecting your brand or product. It gives legal recognition to your mark and serves as irrefutable proof of ownership. It serves as a deterrent to potential infringers, as it serves as an official notice that your mark is a registered trademark. Additionally, registering your trademark gives you the exclusive right to use the trademark throughout India. This makes it easier to enforce your rights if someone attempts to use a similar mark without your permission. Here is the step-by-step process on how to get trademark certificate:
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Selection of Trademark</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            The first step in obtaining a trademark registration certificate in India is to select the trademark. The trademark should be unique, distinctive, and capable of recognising the goods or services of one person from those of another.
            </p>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default PrivateLimitedCompanyContent; 