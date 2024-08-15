import { useEffect } from "react";
import Img from "../atoms/Img";


export default function Sliders() {


  useEffect(() => {
    const slider = document.querySelector('.slider') as HTMLDivElement
    const images = [...slider.querySelectorAll('picture')]
    const total = images.length-1
    let activeEle = slider.querySelector('.active') as HTMLPictureElement
    let indexActive = images.indexOf(activeEle)
    setInterval(() => {
      activeEle.classList.remove('active')
      if(total>indexActive){
        images[indexActive+1].classList.add('active')

      }else{
        images[0].classList.add('active')
      }
      activeEle = slider.querySelector('.active') as HTMLPictureElement
      indexActive = images.indexOf(activeEle)
    }, 5000);
  },[])
  return (
    <div className="slider" >
      <Img src="slider1" ext="jpg" alt="slider" className="w-full max-w-full active" index="0"/>
      <Img src="slider2" ext="jpg" alt="slider" className="w-full" index="1" />
    </div>
  )
}
