import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiLock,
  FiMonitor,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiSmartphone,
  FiTrash2,
} from "react-icons/fi";

export default function Cart({
  cart,
  handleRemoveFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="container cart-page">
      <Link className="cart-back" to="/">
        <FiArrowLeft /> Back to shopping
      </Link>
      <div className="cart-page-heading">
        <div>
          <span className="eyebrow">YOUR NEXT UPGRADE</span>
          <h1>
            Your cart<span>.</span>
          </h1>
          <p>A few good choices. A whole lot of possibility.</p>
        </div>
        <span className="cart-item-count">
          <FiShoppingBag /> {cart.length} {cart.length === 1 ? "item" : "items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-art" aria-hidden="true">
            <span className="empty-cart-ring" />
            <FiShoppingBag />
            <span className="empty-cart-spark">✦</span>
          </div>
          <span className="eyebrow">ROOM FOR SOMETHING GOOD</span>
          <h2>Your next favourite is waiting.</h2>
          <p>
            Your cart is empty for now. Explore our everyday tech essentials and
            find something that feels right for you.
          </p>
          <Link className="primary-button" to="/">
            Explore the collection <FiArrowUpRight />
          </Link>
          <span className="empty-cart-note">
            Good tech. Even better living.
          </span>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-panel">
            <div className="cart-list-heading">
              <h2>Your essentials</h2>
              <span>Price</span>
            </div>
            <ul className="cart-item-list">
              {cart.map((product, index) => (
                <li className="cart-item" key={`${product.id}-${index}`}>
                  <div
                    className={`cart-thumbnail ${product.color}`}
                    aria-hidden="true"
                  >
                    {product.category === "Laptop" ? (
                      <FiMonitor />
                    ) : (
                      <FiSmartphone />
                    )}
                    <span>volt.</span>
                  </div>
                  <div className="cart-item-details">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="cart-item-actions">
                      <div className="quantity-field">
                        <span
                          className="quantity-label"
                          id={`quantity-label-${product.id}`}
                        >
                          Quantity
                        </span>
                        <div
                          className="quantity-control"
                          role="group"
                          aria-labelledby={`quantity-label-${product.id}`}
                        >
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(product.id)}
                            disabled={product.quantity <= 1}
                            aria-label={`Decrease ${product.title} quantity`}
                          >
                            <FiMinus />
                          </button>
                          <span aria-live="polite" aria-atomic="true">
                            {product.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(product.id)}
                            aria-label={`Increase ${product.title} quantity`}
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cart-remove"
                        onClick={() => handleRemoveFromCart(index)}
                        aria-label={`Remove ${product.title} from cart`}
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>
                  <strong className="cart-item-price">
                    {formatPrice(product.price)}
                  </strong>
                </li>
              ))}
            </ul>
            <div className="cart-list-bottom">
              <Link className="cart-back" to="/">
                <FiArrowLeft /> Continue shopping
              </Link>
              <span>Find your everyday upgrade.</span>
            </div>
          </div>

          <aside className="order-summary" aria-labelledby="summary-title">
            <div className="summary-heading">
              <span className="eyebrow">THE LITTLE DETAILS</span>
              <h2 id="summary-title">Order summary</h2>
            </div>
            <dl className="summary-details">
              <div>
                <dt>
                  Subtotal{" "}
                  <span>
                    ({cart.length} {cart.length === 1 ? "item" : "items"})
                  </span>
                </dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd className="delivery-note">Calculated at checkout</dd>
              </div>
            </dl>
            <div className="summary-total">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="summary-caption">
              Delivery charges, if any, are not included.
            </p>
            <button className="checkout-button" disabled>
              <FiLock /> Checkout coming soon
            </button>
            <p className="checkout-note">
              This store is a demo. Online checkout is not available yet.
            </p>
            <div className="summary-signoff">
              <span>✦</span>
              <p>
                Thoughtfully picked.
                <br />
                <strong>Ready for your everyday.</strong>
              </p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
