import { NavLink } from "react-router-dom";


const Navbar = () => {

    const menuList = <>

    <li>
 <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-500 underline" : ""
    }
  > Home
  </NavLink>
    </li>
    <li>
 <NavLink to="/favorites" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    }
  > Favorites
  </NavLink>
    </li>
    <li>
 <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    }
  > Contact Us
  </NavLink>
    </li>
    <li>
 <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
    }
  > Login
  </NavLink>
    </li>

    </>

    return (
        <div>
        <div className="navbar bg-base-200 shadow-md py-5 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-green-700">Phone-Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuList}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;