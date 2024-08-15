type Props = {
  src: string;
  ext: string;
  alt: string;
  index?: string;
  className?: string;
};

export default function Img({ src, ext, alt, className, index }: Props) {
  return (
    <picture className={className} data-index={index}>
      <source media="(min-width: 1921px)" srcSet={`img/2xl/${src}.webp`} type="image/webp" />
      <source media="(min-width: 1921px)" srcSet={`img/2xl/${src}.${ext}`} type={`image/${ext}`} />
      <source media="(min-width: 1401px)" srcSet={`img/xl/${src}.webp`} type="image/webp" />
      <source media="(min-width: 1401px)" srcSet={`img/xl/${src}.${ext}`} type={`image/${ext}`} />
      <source media="(min-width: 1001px)" srcSet={`img/lg/${src}.webp`} type="image/webp" />
      <source media="(min-width: 1001px)" srcSet={`img/lg/${src}.${ext}`} type={`image/${ext}`} />
      <source media="(min-width: 601px)" srcSet={`img/m/${src}.webp`} type="image/webp" />
      <source media="(min-width: 601px)" srcSet={`img/m/${src}.${ext}`} type={`image/${ext}`} />
      <source srcSet={`img/s/${src}.webp`} type="image/webp" />
      <source srcSet={`img/s/${src}.${ext}`} type={`image/${ext}`} />
      <img src={`img/lg/${src}.${ext}`} alt={alt} />
    </picture>
  )
}
