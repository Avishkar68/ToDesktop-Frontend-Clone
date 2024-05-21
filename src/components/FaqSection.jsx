import React from 'react'

const FaqSection = () => {
  return (
    <div className='container'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-[#000000] font-semibold text-5xl'>FAQs</h1>
        <div className='lg:grid lg:grid-cols-2 flex flex-col gap-4'>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Is ToDesktop For Me?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Will my app work offline?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Can I try ToDesktop without buying?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Which version of Electron/Chromium is used?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Do you collect or store data about my customers?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>What support do you offer?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>Does ToDesktop work with sites built with ___?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>How does my app get updated?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>What features are on the product roadmap?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>I want to use ToDesktop to convert multiple web apps, is there a bulk discount available?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='flex justify-between p-6 cursor-pointer bg-[rgba(250,250,252,0.70)] border rounded-[12px]'>
                <p className='text-[#1c1c1f] font-semibold text-lg'>How does ToDesktop work under the hood?</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
           
        </div>
        <p className='text-[#6d6e73] text-lg'>More questions? Visit our <span className='text-[#2f3033]'>docs.</span> Or <span className='text-[#2f3033]'>send us a message.</span></p>
      </div>
    </div>
  )
}

export default FaqSection
