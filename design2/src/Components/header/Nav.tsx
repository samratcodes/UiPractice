import'./Nav.scss';
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav__elements">
        <div className="menu" id="ok">
          <i className="fa-sharp fa-solid fa-bars"></i>
          All Departments
          <select name="ALL departments" id="select"></select>
        </div>
        <div className="home" id="ok">
          Home
        </div>
        <div className="shop" id="ok">
          Shop
        </div>
        <div className="collection" id="ok">
          Collection
        </div>
        <div className="Blog" id="ok">
          Blog
        </div>
        <div className="Contact_nav" id="ok">
          Contact
        </div>
        <div className="pages" id="ok">
          Pages
        </div>
      </div>
    </div>
  );
}

export default Nav