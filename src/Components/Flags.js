import "./flags.css";

const Cards = ({img,title,pop,region,cap}) => {
  return (
    <li className="list__item">
      <img
        className="list__img"
        src={img}
        alt="Germany flag"
        width="267"
        height="160"
      />
      <div className="list__item-content content">
        <h3 className="content__title">{title}</h3>
        <p className="content__text">
          Population: {pop}
        </p>
        <p className="content__text">
          Region: {region}
        </p>
        <p className="content__text">
          Capital: {cap}
        </p>
      </div>
    </li>
  );
};
export default Cards;
