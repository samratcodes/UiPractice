import Nav from "./Nav"
import Search from "./Search"
import Contact from "./Contact"
import'./Header.scss';
const Header = () => {
  return (
    <div className="Header">
        <Contact/>
        <Nav/>
        <Search/> 
    </div>
  )
}

export default Header