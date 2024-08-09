import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Your App Name</Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-gray-300">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
