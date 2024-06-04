import React from 'react'
import 'flowbite'
import Calendar from './Calender'
import Time_schedule from './Time_schedule'
import BedStatisticsChart from './pages/BedStatisticsChart';
import Registration from './pages/Registration';
// import 'flowbite-datepicker'
// import 'flowbite/dist/datepicker.turbo.js';

export default function Dashboard() {
    const bedData = [
        { name: 'Ward 1', availableBeds: 5 },
        { name: 'Ward 2', availableBeds: 8 },
        { name: 'Ward 3', availableBeds: 3 },
        { name: 'ICU', availableBeds: 2 },
    ];
  return (
  
<div className="grid-rows-3 grid-flow-col py-16 px-14 ">
    <h2 className= "row-span-1 text-6xl text-center text-teal-500 font-bold">WELCOME SUPERADMIN</h2>
    
      
    <div id="default-carousel" className="row-span-1 relative w-full z-0 py-10" data-carousel="slide">
        
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./src/assets/hosp-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./src/assets/hosp-mngt1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./src/assets/hosp-mngt2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./src/assets/hosp-mngt3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./src/assets/hosp-mngt4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    <div className='flex flex-row  justify-center  py-10 gap-x-20'>
    <div>
    <Calendar />
    </div>
        <div>
        <Time_schedule />
        </div>
        <div>
      <BedStatisticsChart bedData={bedData} />
    </div>
   
    </div>
    <div>
        <Registration />
    </div>
</div>
  
  )
}


