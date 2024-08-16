import { brands } from "../../Data/brands";
import Img from "../atoms/Img";


export default function Brands() {
  return (
    <section className='Brands py-14 px-12 md:px-[16.5104vw] md:pt-[12.5dvw] md:pb-[20.1563dvw] lg:pb-[17.1563dvw] leading-[1.2em]'>
      <h2 className="text-3xl lg:text-[4.6875dvw] text-center mb-14 lg:mb-[10.9375dvw]">Brands</h2>
      <div className="Brands__gallery">
        {
          brands.map((brand) => (
            <div key={brand.id} className="Brands__item">
              {/* <img src="/img/logos/siete_machos.svg" alt="" /> */}

              {/* <img src={`/img/logos/${brand.image}`} alt={brand.name} className={`Brands__img ${brand.classN} `} /> */}

              <Img src={brand.image} ext="png" alt={brand.name} ></Img>
            </div>
          ))
        }
      </div>
    </section>
  )
}
