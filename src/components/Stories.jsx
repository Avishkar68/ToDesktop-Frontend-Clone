import React from 'react'
import { asset44, asset45, asset46, asset47, asset48, asset53 } from '../assets'

const Stories = () => {
  return (
    <div id='testimonals' className='container'>
        <h2 className='text-5xl sm:font-semibold sb-14 pb-12'>Customer Stories</h2>
        <div className='rounded-xl border flex flex-col lg:flex-row items-end' >
            <div  className='flex flex-col gap-12 p-8'>
            <div className='h-4 w-fit '>

                <img src={asset44} />
            </div>
                <h3 className='text-xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                <div id='tag-container' className='flex gap-3 flex-wrap'>
                    <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                        <i className='fa-solid fa-check'></i>
                        <span className='font-display font-medium'>Chromeless UI</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                        <i className='fa-solid fa-check'></i>
                        <span className='font-display font-medium'>Native spellcheck</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                        <i className='fa-solid fa-check'></i>
                        <span className='font-display font-medium'>Task time in menubar</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                        <i className='fa-solid fa-check'></i>
                        <span className='font-display font-medium'>Notification count in the dock</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                        <i className='fa-solid fa-check'></i>
                        <span className='font-display font-medium'>Global hotkey to create task</span>
                    </div>

                </div>
                <p className='text-lg font-light text-gray-500'>“ToDesktop provided us with a <span className='text-gray-800'>polished desktop app</span>  in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-gray-800'>new and improved features</span>  to our customers within days.”</p>
                <div className='flex gap-4'>
                    <div className='w-12'>
                        <img src={asset45} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <h3>Zeb Evans</h3>
                        <p className='text-gray-500'>Founder & CEO, <a href='#' className='anchor-hover'>ClickUp</a></p>
                    </div>
                </div>
            </div>
            <div className=''>
                <img src={asset46} className='pl-12' />
            </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-4 mt-6 pb-32'>
            <div className='rounded-2xl gradient-hover-outer group lg:h-[420px]'>
                <div className='rounded-2xl p-6 gradient-hover-inner flex flex-col  gap-14 h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full'>
                            <i className='fa-solid fa-code text-indigo-800' ></i>
                        </div>
                        <h3 className='text-2xl font-semibold'>Native APIs</h3>
                    </div>
                    <p className='text-lg font-light'>“What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”</p>
                    <div className='flex gap-6'>
                        <div className='flex'>
                            <div className='-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white '>
                                <img src={asset47} className='min-h-16 min-w-16' />
                            </div>
                            <div className='-mr-3 w-12 h-12  rounded-full overflow-hidden border border-white'>
                                <img src={asset48} />
                            </div>
                        </div>
                            <div className='flex flex-col'>
                                <h3>Rick Pastoor</h3>
                                <a href='#' className='anchor-hover w-fit text-gray-500'>Rise</a>
                            </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl gradient-hover-outer group lg:h-[420px]'>
                <div className='rounded-2xl p-6 gradient-hover-inner flex flex-col  gap-14 h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full'>
                            <i className='fa-solid fa-code text-indigo-800' ></i>
                        </div>
                        <h3 className='text-2xl font-semibold'>Native APIs</h3>
                    </div>
                    <p className='text-lg font-light'>“What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”</p>
                    <div className='flex gap-6'>
                        <div className='flex '>
                            <div className='-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white '>
                                <img src={asset45} className='min-h-16 min-w-16' />
                            </div>
                            <div className='-mr-3 w-12 h-12  rounded-full overflow-hidden border border-white'>
                                <img src={asset48} />
                            </div>
                        </div>
                            <div className='flex flex-col'>
                                <h3>Rick Pastoor</h3>
                                <a href='#' className='anchor-hover w-fit text-gray-500'>Rise</a>
                            </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl gradient-hover-outer group lg:h-[420px]'>
                <div className='rounded-2xl p-6 gradient-hover-inner flex flex-col  gap-14 h-full'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full'>
                            <i className='fa-solid fa-code text-indigo-800' ></i>
                        </div>
                        <h3 className='text-2xl font-semibold'>Native APIs</h3>
                    </div>
                    <p className='text-lg font-light'>“What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”</p>
                    <div className='flex gap-6'>
                        <div className='flex'>
                            <div className='-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white '>
                                <img src={asset47} className='min-h-16 min-w-16' />
                            </div>
                            <div className='-mr-3 w-12 h-12  rounded-full overflow-hidden border border-white'>
                                <img src={asset48} />
                            </div>
                        </div>
                            <div className='flex flex-col'>
                                <h3>Rick Pastoor</h3>
                                <a href='#' className='anchor-hover w-fit text-gray-500'>Rise</a>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* --------------------------------------------- */}

        <div className='rounded-xl border flex flex-col lg:flex-row items-end  bg-[#1c1c1f]'  >
            <div  className='flex flex-col gap-4 p-8 lg:p-16 lg:w-[1700px] '>
                <div className='text-[#d0d1d6] font-medium'>
                    READY TO START BUILDING?
                </div>
                    <h3 className='text-5xl font-semibold leading-tight text-[#ffffff] '>Create your desktop app for free*</h3>
                    <p className='text-lg font-medium text-[#d0d1d6] pb-8'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>

                    <button className='w-fit px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90'>  <i class="fa-solid fa-download pr-2 text-[18px] font-thin " ></i>Dowmload ToDesktop Builder</button>

                    <p className='text-[12px]  font-medium text-[#d0d1d6] pt-4'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>

            </div>
            <div className=''>
                <img src={asset53} className='pl-12 lg:min-h-[500px] lg:min-w-[480px] ' />
            </div>
        </div>
        
    </div>
    
  )
}

export default Stories
