const Marquee = ({ items = [] }) => {
  return (
    <div className="marquee">
      <ul className="marquee__content">
        {items.map((item, i) => (
          <li key={i}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>

      <ul aria-hidden="true" className="marquee__content">
        {items.map((item, i) => (
          <li key={i}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
