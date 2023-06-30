import'./Nav.scss';
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav__About">About</div>
      <div className="Nav__Support">Support</div>
      <div className="Nav__Login">
        <i className="fa-solid fa-user"></i>Login
      </div>
      <div className="Nav__Trail">
        Free Trail
        </div>
    </div>
  );
}

export default Nav