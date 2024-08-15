import Svg from "../atoms/Svg";
import Menu from "../molecules/Menu";


export default function Header() {
  return (
    <header className="flex justify-between items-center h-[6em] px-6 lg:h-[11.9797dvw] lg:pl-headerl lg:pr-headerr">
      <Svg img="logo.svg" alt="logo" w="w-[40%] max-lg:w-[120px] lg:w-[10.9375dvw]" />
      <Menu/>
    </header>
  )
}
