import Page from "../components/Page";
import ProductGrid from "../components/ProductGrid";
import "../sass/pages/product-list-page.scss";

export default function ProductListPage() {
  return (
    <Page title="Product List">
      <ProductGrid />
    </Page>
  );
}
