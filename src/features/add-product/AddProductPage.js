import Page from "../../common/Page";
import AddProductForm from "./AddProductForm";
import "./add-product-page.scss";

export default function AddProductPage() {
  return (
    <Page title="Add Product">
      <AddProductForm />
    </Page>
  );
}
