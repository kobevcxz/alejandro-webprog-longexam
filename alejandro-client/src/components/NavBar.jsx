import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#003A8F] bg-[#003A8F] text-white'
      : 'border-transparent text-zinc-500 hover:border-[#003A8F] hover:bg-[#003A8F] hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#003A8F] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border border-[#003A8F] bg-white object-contain"
          />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-[#003A8F]">
              BulldogEx Shop
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/auth/signin" className={navLinkClassName}>
            Sign In
          </NavLink>

          {/* GOLD BUTTON */}
          <NavLink
            to="/auth/signup"
            className="rounded-full border border-[#FDB913] bg-[#FDB913] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003A8F] transition hover:bg-[#e0a80f]"
          >
            Sign Up
          </NavLink>

        </nav>  

      </div>
    </header>
  );
};

export default NavBar;