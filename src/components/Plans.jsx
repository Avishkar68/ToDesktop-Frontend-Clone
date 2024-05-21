import React from 'react'

const Plans = () => {
  return (
    <div className='container flex flex-col gap-14'>
        <h2 className='text-5xl sm:font-semibold sb-14  lg:w-[600px]'>Choose a plan that fits your needs</h2>
        <div className='flex flex-col gap-12 lg:flex-row '>
            <div className='flex flex-col gap-4 border p-8 bg-[rgba(250,250,252,0.70)] rounded-[16px] lg:w-[410px] '>
                <h2 className='font-semibold text-4xl'>Free</h2>
                <p className='text-[#6d6e73] text-xl pb-6'>For personal use or testing your app before deploying to customers.</p>
                <p className='text-[#84858a] text-lg font-semibold'>KEY FEATURES</p>
                <ul className='text-lg text-[#2f3033] pb-[73px] flex flex-col gap-2'>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Free for personal use</li>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Run app locally</li>
                    <li><i class="fa-solid fa-xmark text-[#6d6e73] pr-2"></i> No Code Signing</li>
                    <li><i class="fa-solid fa-xmark text-[#6d6e73] pr-2"></i> No Native Installers</li>
                </ul>
                <button className='w-full px-8 py-3 font-semibold rounded-lg text-primary bg-white shadow-sm hover:bg-opacity-90 border border-gray-300 text-lg'>Get Started</button>

            </div>
            <div className='flex flex-col gap-4 border p-8 bg-[rgba(250,250,252,0.70)] rounded-[16px] lg:w-[410px] '>
                <h2 className='font-semibold text-4xl'>Essential</h2>
                <p className='text-[#6d6e73] text-xl pb-6'>For simple desktop apps.</p>
                <p className='text-[#6d6e73] text-xl pb-6'><span className='font-semibold text-[#1c1c1f]'>$99/</span>month</p>
                <p className='text-[#84858a] text-lg font-semibold'>KEY FEATURES</p>
                <ul className='text-lg text-[#2f3033] pb-8 flex flex-col gap-2'>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Windows, Mac & Linux</li>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Code Signing</li>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Native Installers</li>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Email/chat support</li>
                </ul>
                <button className='w-full px-8 py-3 font-semibold rounded-lg text-primary bg-white shadow-sm hover:bg-opacity-90 border border-gray-300 text-lg'>Get Started</button>

            </div>
            <div className='flex flex-col gap-4 border p-8 bg-[rgba(250,250,252,0.70)] rounded-[16px] lg:w-[410px] '>
                <h2 className='font-semibold text-4xl'>Professional</h2>
                <p className='text-[#6d6e73] text-xl pb-6'>For sophisticated desktop apps.</p>
                <p className='text-[#6d6e73] text-xl pb-6'><span className='font-semibold text-[#1c1c1f]'>$240/</span>month</p>
                <p className='text-[#84858a] text-lg font-semibold'>EVERYTHING IN ESSENTIAL PLUS</p>
                <ul className='text-lg text-[#2f3033] pb-8 flex flex-col gap-2'>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Plugins</li>
                    <li><i class="fa-solid fa-check text-[#6d6e73] pr-2"></i> Branded Download links</li>
                    <li><i class="fa-solid fa-xmark text-[#6d6e73] pr-2"></i> Analytics</li>
                    <li><i class="fa-solid fa-xmark text-[#6d6e73] pr-2"></i> Access to restricted API</li>
                </ul>
                <button className='w-full px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90 border border-gray-300 text-lg'>Get Started</button>
            </div>
        </div>
        <div className='flex flex-col gap-8 rounded-[16px] lg:flex-row pl-6 pr-6 pt-8 pb-8 lg:p-10 bg-[#1c1c1f]' >
            <div className='flex flex-col gap-4'>
                <h3 className='text-[#d0d1d6]'>DEDICATED SUPPORT AND EXPERT GUIDANCE.</h3>
                <h1 className='text-[#ffffff] text-5xl pb-8 font-semibold'>Enterprise</h1>
                <ul className='grid lg:grid-cols-2  gap-6 text-[#f0f1f7]'>
                    <li className='flex gap-4  items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7] ' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap ' href='#'> Whiteglove onboarding</a>
                    </li>   
                    <li className='flex gap-4 items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7]' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap' href='#'> Custom features</a>
                    </li>
                    <li className='flex gap-4 items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7]' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap' href='#'> Priority support</a>
                    </li>
                    <li className='flex gap-4 items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7]' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap' href='#'> Shared Slack channel</a>
                    </li>
                    <li className='flex gap-4 items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7]' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap' href='#'> Dedicated account manager</a>
                    </li>
                    <li className='flex gap-4 items-center pr-32'>
                        <i className='fa-solid fa-check text-[#f0f1f7]' ></i>
                        <a className='text-lg font-medium  text-[#f0f1f7] whitespace-nowrap' href='#'> Custom Billing</a>
                    </li>
                </ul>
            </div>
            <div className='flex '>
                <div className='flex flex-col justify-center items-center bg-[#fafafc] rounded-[16px] p-6 lg:pr-16 lg:pl-16'>
                    <p className='text-center  font-semibold pb-10 text-[#84858a] lg:max-w-[280px]'>Secure, reliable cross-platform desktop apps for enterprise teams.</p>
                    <button className='w-full px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90 text-lg'>Contact Sales</button>
                    <p className='text-[#84858a] text-[12px] pt-6 text-center'>You may also live chat with us by <a href='#' className='text-[#2f3033] border-b border-[#2f3033]'>clicking here.</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans
