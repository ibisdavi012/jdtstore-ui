import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "../sass/components/add-product-form.scss";

export default function AddProductForm() {
  const [productType, setProductType] = useState("Dvd");

  const productTypeChanged = (e) => {
    setProductType(e.target.value || "Dvd");
  };

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  useEffect(() => {
    setTimeout(() => {
      [...document.getElementsByClassName("dynamic-field")].forEach(
        (hiddenField) => {
          hiddenField.style.display = hiddenField.classList.contains("hidden")
            ? "none"
            : "block";
        }
      );
    }, 500);
  }, [productType]);

  return (
    <form id="product_form" autoComplete="off">
      <div className="form-group">
        <label>SKU</label>
        <input id="sku" type="text" placeholder="product's SKU" />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input id="name" type="text" placeholder="product's name" />
      </div>

      <div className="form-group">
        <label>Price($)</label>
        <input id="price" type="text" placeholder="product's price" />
      </div>

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
      <div
        className={`form-group dynamic-field ${
          productType !== "Dvd" ? "hidden" : "visible"
        }`}
      >
        <label>Size (Mb)</label>
        <input id="size" type="text" placeholder="dvd's size" />
      </div>
      <div
        className={`form-group dynamic-field ${
          productType !== "Book" ? "hidden" : "visible"
        }`}
      >
        <label>Weight (Kg)</label>
        <input id="weight" type="text" placeholder="books's weight" />
      </div>
      <div
        className={`dynamic-field ${
          productType !== "Furniture" ? "hidden" : "visible"
        }`}
      >
        <div className="form-group">
          <label>Height (cm)</label>
          <input id="height" type="text" placeholder="furniture's height" />
        </div>
        <div className="form-group">
          <label>Width (cm)</label>
          <input id="width" type="text" placeholder="furniture's width" />
        </div>
        <div className="form-group">
          <label>Length($)</label>
          <input id="length" type="text" placeholder="furniture's length" />
        </div>
      </div>
    </form>
  );
}
