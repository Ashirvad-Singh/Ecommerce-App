import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "iPhone 17",
    price: 79900,
    category: "Mobile",
    color: "lavender",
    description: "A little more extraordinary.",
    tag: "NEW ARRIVAL",
  },
  {
    id: 2,
    title: "MacBook Air",
    price: 99900,
    category: "Laptop",
    color: "blue",
    description: "Light on weight. Big on possibility.",
    tag: "FAN FAVOURITE",
  },
  {
    id: 3,
    title: "Samsung S26",
    price: 69900,
    category: "Mobile",
    color: "sage",
    description: "Make every day a little epic.",
    tag: "TOP PICK",
  },
];

export default function ProductCard({ handleAddToCart }) {
  useEffect(() => {
    console.log("Product component loaded");
  }, []);

  return (
    <section className="container product-section" id="products">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CURATED, NOT COMPLICATED</span>
          <h2>Your next favourite is here.</h2>
        </div>
        <p>A few great picks. Endless possibilities.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article
            className="product-card"
            key={product.id}
            id={`product-${product.id}`}
          >
            <div className={`product-art ${product.color}`}>
              <span className="product-tag">{product.tag}</span>
              <div className="device-scene" aria-hidden="true">
                {product.category === "Laptop" ? (
                  <div className="laptop">
                    <div className="laptop-screen">
                      <div className="screen-glow" />
                    </div>
                    <div className="laptop-base" />
                  </div>
                ) : (
                  <div className={`phone ${product.color}`}>
                    <div className="camera-cluster">
                      <i />
                      <i />
                      <i />
                      <span />
                    </div>
                    <span className="phone-mark">✦</span>
                  </div>
                )}
              </div>
              <span className="art-caption">A NEW EVERYDAY.</span>
            </div>
            <div className="product-info">
              <span className="product-category">
                {product.category === "Mobile" ? "SMARTPHONE" : "LAPTOP"}
              </span>
              <div className="product-title">
                <h3>{product.title}</h3>
                <span
                  className={`color-dot ${product.color}`}
                  aria-hidden="true"
                />
              </div>
              <p>{product.description}</p>
              <div className="product-bottom">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <button
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.title} to cart`}
                >
                  <FiPlus />
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
