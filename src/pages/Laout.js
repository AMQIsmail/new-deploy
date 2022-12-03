import { NavLink } from "react-router-dom";
import './active.css';
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Blogs">Blogs</NavLink>
          </li>
          {/* <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
};
export default Layout;