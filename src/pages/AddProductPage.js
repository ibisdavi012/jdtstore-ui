import Page from "../common/Page";
import AddProductForm from "../features/add-product/AddProductForm";
import "./add-product-page.scss";

export default function AddProductPage() {
  return (
    <Page title="Add Product">
      <AddProductForm />
    </Page>
  );
}
