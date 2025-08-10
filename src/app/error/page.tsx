"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const error = () => {

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };



  return (
    <section className="relative bg-gradient-to-tr from-purple-400 via-blue-300 to-pink-300 overflow-hidden">
        {/* Blobs */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-400/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-pink-400/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-400/50 rounded-full blur-[100px]" />

        {/* Inner content wrapper */}
            <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
                        <p className="text-sm font-medium text-[#B40068] dark:text-[#B40068]">404 error</p>
                        <h1 className=" mt-3 tracking-normal md:text-[3.5rem] text-2xl font-semibold text-white dark:text-white md:text-3xl">Something went wrong</h1>
                        <p className="mt-4 text-gray-50 dark:text-gray-50">We searched high and low, but couldn’t find what you’re looking for.Let’s find a better place for you to go.</p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto" onClick={handleGoBack}>
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                                <span>Go back</span>
                            </button>

                            <button  className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#B40068]/80 rounded-lg shrink-0 sm:w-auto hover:bg-[#B40068] dark:hover:bg-[#B40068] dark:bg-[#B40068]">
                                <Link href="/">Take me home</Link>
                            </button>
                        </div>
                    </div>

                    <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200"> <Link href="/services#services"> Services </Link> </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Dive in to learn all about our Services.</p>

                            <a href="/#services" className="inline-flex items-center mt-4 text-sm text-[#B40068] gap-x-2 dark:text-[#B40068] hover:underline">
                                <span>Check Services</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200"> <Link href="/about"> About </Link> </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Want to know more about us? Visit our About page.</p>

                            <a href="/about" className="inline-flex items-center mt-4 text-sm text-[#B40068] gap-x-2 dark:text-[#B40068] hover:underline">
                                <span>View About</span> 

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200"> <Link href="/contact"> Contact </Link> </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Can’t find what you’re looking for? Contact us.</p>

                            <a href="/contact" className="inline-flex items-center mt-4 text-sm text-[#B40068] gap-x-2 dark:text-[#B40068] hover:underline">
                                <span>Contact us</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>

  );
};

export default error;
