import Img from "../atoms/Img";


export default function Distribution() {
  return (
    <section className="bg-body-secondary px-8 py-8 lg:pl-[10.93dvw] lg:pr-[12.81dvw] lg:pt-[9.1145dvw] lg:pb-[11.9791dvw] lg:grid grid-cols-[33.75dvw_1fr] gap-x-[8.4375dvw]">
      <div className='max-lg:max-w-[300px] max-lg:mx-auto'>
        <Img src="chulavista" ext="png" alt="Tequia Chulavista" className='w-full' ></Img>
      </div>
      <div className="info lg:text-[1.5dvw] mt-6 lg:mt-[2.8125dvw]">
        <h2 className="mb-8 lg:mb-[4dvw] text-3xl lg:text-[2.6041dvw]">Distribution</h2>
        <p className="leading-[1.2em] max-md:text-justify">
          <span className='font-heading text-[1.2em] lg:text-[2.08dvw]'>Our wines, beers, and spirits</span> come <br/>
          from all parts of the world. Our logistics team <br/>
          schedules daily inbound trucks and ocean <br/>
          containers, where all are carefully inspected <br/>
          upon receiving, to ensure they meet United <br/>
          Beverages high standards. Our warehouse <br/>
          staff processes orders destined for our <br/>
          customers throughout California and our <br/>
          distributers throughout the United States.
        </p>
        <ul className="list leading-[1.2em] text-[1.3em] lg:text-[1.8dvw] mt-8 lg:mt-[4dvw] max-md:text-justify">
          <li>First Class Logistics.</li>
          <li>Product shipped throughout California <br/>
          and all of the United States.</li>
          <li>First Class Service.</li>
          <li>Brand Marketing and top account</li>
        </ul>
      </div>
    </section>
  )
}
