"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import ModernFooter from "../Components/Footer/ModernFooter";

const error = () => {

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };



  return (
    <>
        <section className="relative z-10 py-[120px] bg-gray-200">
            <div className="container mx-auto">
                <div className="-mx-4 flex">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center">
                        
                            {/* Gradient 404 */}
                            <h2 className="mb-4 text-[60px] sm:text-[90px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-[#790046] to-[#E50078] bg-clip-text text-transparent">
                                404
                            </h2>

                            {/* Darker text, slightly bigger */}
                            <h4 className="mb-3 text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-tight text-gray-900">
                                Oops! That page can’t be found
                            </h4>
                            <p className="mb-8 text-lg sm:text-xl text-gray-700">
                                Sorry, the page you are looking for doesn’t exist.
                            </p>

                            {/* Button with gradient hover */}
                            <Link
                                href="/"
                                className="inline-block rounded-lg border border-[#790046] px-8 py-3 text-center text-base sm:text-lg font-semibold text-gray-900 transition bg-white hover:bg-gradient-to-r hover:from-[#790046] hover:to-[#E50078] hover:text-white"
                            >
                                Go To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModernFooter/>
    </>
  );
};

export default error;
