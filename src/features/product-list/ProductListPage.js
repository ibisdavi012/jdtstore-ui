import Page from "../../common/Page";
import ProductGrid from "./ProductGrid";
import "./product-list-page.scss";

export default function ProductListPage() {
  return (
    <Page title="Product List">
      <ProductGrid />
    </Page>
  );
}
