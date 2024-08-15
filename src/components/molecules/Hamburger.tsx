type Props = {
  active: boolean;
  manejarClick: () => void;
};


const Hamburgers = ({active,manejarClick}:Props) => {

  return (
    <button
      onClick={manejarClick}
      className={`hamburger hamburger--squeeze lg:hidden ${active ? 'is-active' : ''}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner">
        </span>
      </span>
    </button>
  );
};

export default Hamburgers;
