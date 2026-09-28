import { FiArrowUpRight, FiShield, FiZap } from "react-icons/fi";

export default function HomeBanner() {
  return (
    <section className="container hero-section" id="home">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span /> YOUR EVERYDAY, UPGRADED
        </div>
        <h1>
          Good tech.
          <br />
          Even better
          <br />
          <em>living.</em>
        </h1>
        <p>
          Big ideas start with the right essentials. Discover the tech that
          keeps you connected, creative, and a step ahead.
        </p>
        <a className="primary-button" href="#products">
          Find your upgrade <FiArrowUpRight />
        </a>
        <div className="hero-note">
          <span className="note-icon">
            <FiShield />
          </span>
          <span>
            Made for work, play,
            <br />
            <strong>and everything in between.</strong>
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-top">
          <span>THE NEXT CHAPTER OF TECH</span>
          <FiArrowUpRight />
        </div>
        <div className="hero-circle" aria-hidden="true" />
        <span className="vertical-label">DESIGNED FOR YOUR EVERYDAY</span>
        <div className="hero-devices" aria-hidden="true">
          <div className="phone hero-phone">
            <div className="camera-cluster">
              <i />
              <i />
              <i />
              <span />
            </div>
            <span className="phone-mark">✦</span>
          </div>
          <div className="front-phone">
            <div className="island" />
            <div className="wallpaper-orbit" />
            <span>hello.</span>
          </div>
        </div>
        <div className="floating-label">
          <FiZap />
          <div>
            A fresh perspective.<small>Meet your next favourite.</small>
          </div>
        </div>
        <div className="visual-bottom">
          <div>
            <small>IN THE SPOTLIGHT</small>
            <h2>iPhone 17</h2>
            <span>From ₹79,900</span>
          </div>
          <a href="#product-1" aria-label="Explore iPhone 17">
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
