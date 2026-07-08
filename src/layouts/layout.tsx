import { Outlet, NavLink } from "react-router-dom";
import '../styles/App.css'

function Layout() {

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
