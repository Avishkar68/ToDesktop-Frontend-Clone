import React from 'react'
import { useEffect } from 'react';
import { asset2, asset3 ,asset4 , asset5 , asset6 , asset7 , asset8 , asset9 } from '../assets';

const Hero = () => {
    // const initialTranslateLTR = -48 * 4;
    // const initialTranslateRTL = 36 * 4;
  
    // function setUpIntersectionObserver(element, isLTR, speed) {
    //   const intersectionCallback = (entries) => {
    //     const isIntersecting = entries[0].isIntersecting;
    //     if (isIntersecting) {
    //       document.addEventListener('scroll', scrollHandler);
    //     } else {
    //       document.removeEventListener('scroll', scrollHandler);
    //     }
    //   };
    //   const intersectionObserver = new IntersectionObserver(intersectionCallback);
  
    //   intersectionObserver.observe(element);
  
    //   function scrollHandler() {
    //     const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    //     let totalTranslate = 0;
    //     if (isLTR) {
    //       totalTranslate = translateX * initialTranslateLTR;
    //     } else {
    //       totalTranslate = -(translateX * initialTranslateRTL);
    //     }
    //     element.style.transform = `translateX(${totalTranslate}px)`;
    //   }
    // }
  
    // useEffect(() => {
    //   const line1 = document.getElementById('line-1');
    //   const line2 = document.getElementById('line-2');
    //   const line3 = document.getElementById('line-3');
  
    //   if (line1) setUpIntersectionObserver(line1, true, 0.15);
    //   if (line2) setUpIntersectionObserver(line2, false, 0.15);
    //   if (line3) setUpIntersectionObserver(line3, true, 0.15);
  
    //   // Cleanup on unmount
    //   return () => {
    //     document.removeEventListener('scroll', scrollHandler);
    //   };
    // }, []);

  return (
    <>
    <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-50  via-orange-50 to-transparent'>

        <div id='hero-container' className='max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12 '>
            <div id='version-text' className='flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                <div className='w-2 h-2 bg-yellow-400 border rounded-full border-yello  w-600'></div>
                <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
            </div>
            <div id='hero-features' className='hidden sm:flex gap-8 my-6'>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                <i class="fa-solid fa-file-code text-sm"></i>
                <p>Code Optional</p>
                </div>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                <i class="fa-brands fa-dropbox text-sm"></i>
                <p>Drag & drop builder</p>
                </div>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                <i class="fa-solid fa-laptop text-sm"></i>
                <p>Windows, Mac, Linux</p>
                </div>
              
            </div>
            <h1 className='font-semibold text-4xl leading-snug mt-4 sm:text-7xl'>Web app to desktop app in minutes</h1>
            <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
            <div id='buttons-container' className='mt-12 flex flex-col gap-4 sm:flex-row'>
                <button className='px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90'>Dowmload Now</button>
                <button className='px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800'>Read Docs</button>
            </div>
        </div>

        <div id='companies-container' className='flex flex-col gap-8'>

            <div id='companies-title' className='flex justify-center gap-2'>
                <img className='translate-y-2' src={asset2} />
                <span className='font-medium'>APPS POWERED BY TODESKTOP</span>
                <img className='-scale-x-100 translate-y-2' src='./assets/asset 2.svg' />
            </div>  

            <div id='companies-lines-group' className='flex flex-col gap-4'>
                <div id='line-1' className='flex gap-4 w-screen -translate-x-48'>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset3} />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset4}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    
                </div>
                <div id='line-2' className='flex gap-4 w-screen -translate-x-36'>
                <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset3} />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset4}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                </div>
                <div id='line-3' className='flex md:hidden gap-4 w-screen -translate-x-48'>
                <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset3} />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset4}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset5}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset6}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset7}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset8}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded bg-white border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:w-16 md:h-16' src={asset9}  />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                </div>
            </div>  

        </div>


    </div>
    </>
  )
}

export default Hero
