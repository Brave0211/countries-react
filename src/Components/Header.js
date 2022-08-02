import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <h2 className="header__title">Where in the world?</h2>
        <a className="header__dark" href="#">Dark Mode</a>
      </div>
    </header>
  );
};
export default Header;
