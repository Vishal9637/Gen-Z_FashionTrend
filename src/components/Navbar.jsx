import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-500">
          StyleAI
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/results" className="hover:text-pink-500">Explore</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
