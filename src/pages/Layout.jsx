import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
      </nav>
     
        <div className="content">
        <Outlet />
        </div>
     
      <footer className="footer">
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
      </div>
    </>
  )
};

export default Layout;