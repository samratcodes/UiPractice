import'./Nav.scss'
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav__iteams" id="Home">
        Home
      </div>
      <div className="Nav__iteams" id="Speaker">
        Speakers
      </div>
      <div className="Nav__iteams" id="Schedule">
        Schedule
      </div>
      <div className="Nav__iteams" id="Location">
        Location
      </div>
      <div className="Nav__iteams" id="Blog">
        Blog
      </div>
      <div className="Nav__iteams" id="Contact">
        Contact
      </div>
      <div className="Nav__iteams" id="button">
        CONFIRM YOUR SEAT &#8594;
      </div>
    </div>
  );
}

export default Nav