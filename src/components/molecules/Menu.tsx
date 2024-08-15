import { useState } from "react";
import { menu } from "../../Data/menu";
import Hamburger from "./Hamburger";


export default function Menu() {
  const [active, setActive] = useState(false);

  const hamburgerClick = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    active ? setActive(false) : setActive(true);
  }
  return (
    <>
      <Hamburger active={active} manejarClick={hamburgerClick}/>
      <ul className={`menu absolute left-0 top-[6em] w-full lg:w-auto lg:static lg:text-[1.25dvw] max-lg:bg-body-secondary max-lg:overflow-hidden max-lg:transition-all duration-500 z-50 ${active ? 'is-active' : ''}`}>
        {
          menu.map((item) => (
            <li key={item.name}>
              <a className="block max-lg:px-4 max-lg:leading-[2.5em]" href={`#${item.name}`}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}
