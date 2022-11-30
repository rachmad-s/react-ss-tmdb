import { Navbar, NavbarBrand, Nav, Input, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import WatchListContext from "../contexts/WatchList.context";
import { Badge } from "reactstrap";

function Header(props) {
  const { watchLists } = useContext(WatchListContext);

  return (
    <Navbar color="dark" dark fixed="top">
      <NavbarBrand>React Movie</NavbarBrand>
      <Nav>
        <NavItem>
          <Link to={"/"} className="text-light nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/my-watch-list"} className="text-light nav-link">
            My Watch List <Badge color="danger">{watchLists.length}</Badge>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
