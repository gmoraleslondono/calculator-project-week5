import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <nav>
        <div className="header">
          <Link className="title" to="/">
            Super Calculator
          </Link>
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
