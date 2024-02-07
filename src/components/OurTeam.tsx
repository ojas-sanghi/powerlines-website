import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import Image from 'next/image'

function OurTeam() {
  return (

    <section className="w-3/4 m-auto">
   
      {/* Start of Our Team Section */}
      <section className="flex flex-col 
      items-center justify-center gap-3.5">
        <h2 className={`font-bold text-about-us-heading tracking-wider text-2xl  text-center md:text-5xl mt-8 md:mt-32 leading-10 ${cairo.className}`}>
        OUR TEAM
        </h2>
        <p className={`text-[20px] text-center font-light leading-9 mb-24 mr-16 ml-16 ${robotoSlab.className}`}>Our passionate and enthusiastic team ready to change the energy system.</p>
      </section>
   

    
      <section className="grid grid-cols-2  md:grid-cols-3 gap-6 justify-items-center mx-auto max-w-6xl lg:max-w-none ">
        
        {/* name1 */}
        <div className=" max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#B08B1A] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/maleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-cover" />
              <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </section>
          </div>
        </div>

   
        {/* Name 2 */}
        <div className=" max-w-[295px] md:max-w-none w-full overflow-hidden
        bg-[#FFFEE8] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/femaleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-fit" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name 1</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </div>
          </div>
        </div>



        {/* name3 */}
        <div className=" max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#B08B1A] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/maleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-cover" />
              <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </section>
          </div>
        </div>
    
        {/* name2 */}   
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#FFFEE8] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/femaleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-fit" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name 1</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </div>
          </div>
        </div>
    
        {/* name1 */}
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#B08B1A] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/maleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-cover" />
              <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </section>
          </div>
        </div>
      
        {/* name2 */}   
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#FFFEE8] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/femaleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-fit" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name 1</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </div>
          </div>
        </div>
      
        {/* name1 */}
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#B08B1A] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/maleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-cover" />
              <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </section>
          </div>
        </div>
      
        {/* name2 */}
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#FFFEE8] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/femaleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-fit" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name 1</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </div>
          </div>
        </div>
      
        {/* name1 */}
        <div className="max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#B08B1A] bg-opacity-50">
          <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
              <img src="/maleTransparent.png" alt="Profile" className="absolute top-0 left-0 w-full h-full object-cover" />
              <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
                <p className="text-sm sm:text-base lg:text-lg text-white mx-2 font-bold leading-normal">Name</p>
                <p className="text-xs sm:text-sm lg:text-base text-white mx-2 font-normal leading-normal">Role</p>
              </section>
          </div>
        </div>
      
  </section>

      </section>
 
  )
}

export default OurTeam