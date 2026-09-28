import { FiArrowUpRight, FiShoppingBag, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <header className="site-header">
      <div className="announcement">
        Good tech. Great possibilities.
        <Link to="/#products">
          Find your next upgrade <FiArrowUpRight />
        </Link>
      </div>
      <div className="container nav-row">
        <Link className="wordmark" to="/" aria-label="Volt home">
          <span className="brand-icon">
            <FiZap />
          </span>
          volt<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/#products">Shop all</Link>
          <Link to="/#product-1">Smartphones</Link>
          <Link to="/#product-2">Laptops</Link>
        </nav>
        <Link
          className="cart-count"
          to="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <FiShoppingBag />
          <span>My cart</span>
          <b aria-live="polite">{cartCount}</b>
        </Link>
      </div>
    </header>
  );
}
