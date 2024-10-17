import Product from "./Product.jsx";
import './productTab.css';

function ProductTab() {
  return (
    <div className="product-tab-container">
      <Product title="BTS" idx={0} />
      <Product title="Blackpink" idx={1} />
      <Product title="Hollywood" idx={2} />
      <Product title="America" idx={3} />
    </div>
  );
}

export default ProductTab;
