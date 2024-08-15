
import Img from './../atoms/Img';

export default function Whatwedo() {
  return (
    <section className="bg-body-secondary px-6 py-16 lg:pl-[10.9375dvw] lg:pr-[13.2812dvw] lg:py-[10.8dvw] lg:grid lg:grid-cols-[1fr_35dvw] gap-x-[8vw]">
      <div className="info lg:text-[1.42dvw]">
        <h2 className="title text-3xl lg:text-[4dvw] mb-5 lg:mb-[2.5dvw]">What we do</h2>
        <p><span className='font-heading'>Our brands at United Beverages</span> are different <br/>
        and important to both knowledgeable and <br/>
        emerging wine, beer and spirits experts and <br/>
        consumers. Each of our products in the <br/>
        United Beverages portfolio, have been <br/>
        scrutinized, researched and specifically <br/>
        selected for its quality and/or its innovation <br/>
        along with its respect for the traditions it <br/>
        represents.</p>
        <p className='mt-8 max-lg:mb-8'>Each member of the team at United <br/>
        Beverages is an industry professional who <br/>
        has an extensive background in wine, beer <br/>
        and spirits sales, and distribution. Their <br/>
        knowledge of and passion for our products, <br/>
        combined with a commitment to customer <br/>
        service, have enabled United Beverages to <br/>
        build lasting relationships with a <br/>
        sophisticated, demanding, and expanding <br/>
        customer base</p>
      </div>
      <div className='lg:mt-16 max-lg:w-8/12 max-lg:max-w-[300px] max-lg:mx-auto'>
        <Img src="tarea" ext="png" alt="Tequia La Tarea" className='w-full' ></Img>
      </div>
    </section>
  )
}
