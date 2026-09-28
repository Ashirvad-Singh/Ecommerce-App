import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/ProductCard";

export default function Homepages({ handleAddToCart }) {
  return (
    <>
      <HomeBanner />
      <ProductCard handleAddToCart={handleAddToCart} />
    </>
  );
}
