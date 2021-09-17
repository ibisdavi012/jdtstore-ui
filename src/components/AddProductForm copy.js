import { useState } from "react";
import { useSelector } from "react-redux";

import FormField from "./FormField";
import DvdFields from "../add-product/DvdFields";
import BookFields from "../add-product/BookFields";
import FurnitureFields from "../add-product/FurnitureFields";

import "../sass/components/add-product-form.scss";

export default function AddProductForm() {
  const [productType, setProductType] = useState("Dvd");

  const productTypeChanged = (e) => {
    setProductType(e.target.value || "Dvd");
  };

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  const SpecificFields = ({ type }) => {
    switch (type) {
      case "Dvd":
        return <DvdFields />;
      case "Book":
        return <BookFields />;
      case "Furniture":
        return <FurnitureFields />;
      default:
        return null;
    }
  };

  return (
    <form id="product_form" autoComplete="off">
      <h1>{formStatus}</h1>
      <FormField id="sku" label="SKU" placeholder="product's SKU" />
      <FormField id="name" label="Name" placeholder="product's name" />
      <FormField id="price" label="Price ($)" placeholder="product's price" />

      <div className="form-group">
        <label>Type Switcher</label>
        <select
          id="productType"
          onChange={(e) => {
            productTypeChanged(e);
          }}
          value={productType}
        >
          <option id="DVD" value="Dvd">
            DVD
          </option>
          <option id="Book" value="Book">
            Book
          </option>
          <option id="Furniture" value="Furniture">
            Furniture
          </option>
        </select>
      </div>
      <SpecificFields type={productType} />
    </form>
  );
}
