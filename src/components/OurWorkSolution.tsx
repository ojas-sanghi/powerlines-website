import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function OurWorkSolution() {
  return (
    <div>
      <section className='flex flex-row mb-10'>
        <section>
          <h2 className='text-darker-yellow tracking-wide leading-8 font-bold text-xl md:text-2xl pb-6 pt-8 hidden md:block'>OUR SOLUTION</h2>
          <h2 className={`font-semibold text-xl md:text-2xl pb-4 tracking-wide leading-8 ${cairo.className}`}>We aim to employ impactful strategies to reshape public utility commissions, enabling them to facilitate, rather than hinder, the clean energy transition.</h2>
          <h3 className={`texl-lg md text:xl tracking-wide leading-8  ${robotoSlab.className}`}>Through our Theory of Change, we’re transforming PUCs to become enablers, rather than barriers, to a clean energy transition.</h3>
        </section>
      </section>
    </div>
  )
}

export default OurWorkSolution