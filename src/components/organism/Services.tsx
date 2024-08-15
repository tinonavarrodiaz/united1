import React from 'react'
import Img from '../atoms/Img'

export default function Services() {
  return (
    <>
      <Img src="land" ext="jpg" alt="Services Image" ></Img>
    <section className='py-10 px-12 lg:px-[20.83dvw] lg:pb-[11.05vw] lg:pt-[12.79dvw]'>
      <h2 className='text-center text-3xl lg:text-[4.68dvw] mb-8 lg:mb-[5.62dvw]'>Services</h2>
      <p className='text-lg max-md:text-justify lg:text-[3.35dvw] leading-[1.2em]'>United Beverages Warehouse is the <br/>
        home for all the one of a kind items <br/>
        that make up our portfolio.
      </p>
    </section>
    </>
  )
}
