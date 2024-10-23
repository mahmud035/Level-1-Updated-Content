import { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo/CareerHub.png';

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const routes = [
    { id: 1, path: '/statistics', name: 'Statistics' },
    { id: 2, path: '/applied-jobs', name: 'Applied Jobs' },
    { id: 3, path: '/blog', name: 'Blog' },
  ];

  return (
    <nav className="py-2 flex justify-between items-center relative">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-36" />
      </Link>

      <ul
        className={`md:flex md:gap-6 xl:gap-8 ${
          showNavLinks
            ? 'absolute top-3 left-1/2 flex flex-col gap-4 duration-1000'
            : 'hidden'
        }`}
      >
        {routes.map((route) => (
          <li>
            <NavLink
              to={`${route.path}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#7E90FE] font-medium'
                  : 'text-[#757575] font-medium'
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowNavLinks((prevValue) => !prevValue)}
        className="md:hidden"
      >
        {showNavLinks ? <FaX size={24} /> : <FaBars size={24} />}
      </button>

      <button className="hidden md:block rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-3">
        Start Applying
      </button>
    </nav>
  );
}
