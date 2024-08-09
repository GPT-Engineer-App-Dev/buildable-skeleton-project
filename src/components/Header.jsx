import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">FancyApp</Link>
        <ul className="flex space-x-4 items-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <Button variant="ghost" asChild>
                <Link to={item.to} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
