import React from 'react'
import { asset37 , asset38 , asset39 , asset40 , asset41 , asset42 } from '../assets'

const BentoGrid = () => {
  return (
    <div id='bento-grid' className='container  '>
      <h2 className='text-5xl sm:font-semibold mb-14'>ToDesktop handles the details</h2>

      <div id='grid-container' className='flex flex-col gap-6 lg:grid lg:grid-cols-3' style={{ gridAutoRows: '96px' }}>

        <div className='row-start-1 row-end-3 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Native Notifications</h3>
                <img src={asset37} />
            </div>
        </div>
        
        <div className='row-start-1 row-end-4 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Auto Updates</h3>
                <p className='text-lg text-center font-light'>We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                <img src={asset38}  />
            </div>
        </div>

        <div className='row-start-1 row-end-3 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Plugins</h3>
                <img src={asset39}  />
            </div>
        </div>

        <div className='row-start-3 row-end-6 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Access to Native APIs</h3>
                <p className='text-lg text-center font-light'>ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
                <img src={asset40}  />
            </div>
        </div>

        <div className='row-start-4 row-end-6 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Customizable look and feel</h3>
                <img src={asset42} />
            </div>
        </div>

        <div className='row-start-3 row-end-6 group rounded-2xl bg-slate-100 p-[1px]  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 '>
            <div className='card-bg h-full w-full rounded-2xl p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50'>
                <h3 className='text-2xl'>Native Installers</h3>
                <p className='text-lg text-center font-light'>We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
                <img src={asset42}  />
            </div>
        </div>

      </div>
    </div>
  )
}

export default BentoGrid
