import NoProducts from "./NoProducts";
import Product from "./Product";
import Loader from "../../common/Loader";

import "./product-grid.scss";
import "./product-details.scss";

export default function ProductGrid({ loading, products, noProducts, error }) {
  if (error) {
    return (
      <NoProducts message="Something went wrong when trying to fetch the products." />
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (noProducts) {
    return <NoProducts />;
  }

  if (products.length > 0) {
    return (
      <div className="product-grid">
        {products.map((product, index) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }

  return <div></div>;
}

ProductGrid.defaultProps = { firstRender: false };
