import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/new-deploy/">Home</Link>
          </li>
          <li>
            <Link to="/new-deploy/About">About</Link>
          </li>
          <li>
            <Link to="/new-deploy/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;