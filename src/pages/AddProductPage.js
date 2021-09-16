import Page from "../components/Page";
import AddProductForm from "../components/AddProductForm";
import "../sass/pages/add-product-page.scss";

export default function AddProductPage() {
  return (
    <Page title="Add Product">
      <AddProductForm />
    </Page>
  );
}
