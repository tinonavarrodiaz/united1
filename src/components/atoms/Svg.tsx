
type SvgProps = {
    img: string;
    alt: string;
    w: string;
}

export default function Svg({img,alt,w}: SvgProps) {
  return (
    <img src={img} alt={alt} className={w} />
  )
}
