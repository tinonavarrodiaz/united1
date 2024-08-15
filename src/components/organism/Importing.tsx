import Img from "../atoms/Img";

export default function Importing() {
  return (
    <>
      <Img src="warehouse" ext="jpg" alt="Importing Image" ></Img>
      <section className='bg-body-secondary py-10 px-12 lg:pl-[10.9375dvw] lg:pr-[9.6875dvw] lg:py-[11.97916667dvw] lg:grid grid-cols-[39.0625dvw_1fr] gap-x-[16.14583333vw] leading-[1.8em]'>
        <div className="col1 text-lg lg:text-[1.5dvw] leading-[1.2em]">
          <h2 className="text-3xl lg:text-[2.6042dvw] mb-8 lg:mb-[4.15dvw]">Importing</h2>
          <p>
            <span className='font-heading text-[1.2em] lg:text-[2.08dvw]'>United Beverages</span> provides complete importing <br/>
            services, from label approvals to container <br/>
            consolidation. We investigate, plan and implement <br/>
            effective and relevant transport methods which <br/>
            optimally meet the needs of United Beverages, it’s <br/>
            suppliers and customers.
          </p>
        </div>
        <div className="text-xl lg:text-[1.8229dvw] leading-[1.2em] mt-4 lg:mt-[2dvw]">
          <p>Cola Label Approval.</p>
          <p>Cola Formula Approval.</p>
          <p>Import Planning.</p>
          <p>Compliance</p>
          <p>Public Warehouse (ABC 14).</p>
        </div>
      </section>
    </>
  )
}
