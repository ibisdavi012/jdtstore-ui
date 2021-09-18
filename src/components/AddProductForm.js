import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "../sass/components/add-product-form.scss";

export default function AddProductForm() {
  const [productSku, setProductSku] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productType, setProductType] = useState("Dvd");
  const [productSpecifics, setProductSpecifics] = useState({});

  const productTypeChanged = (e) => {
    setProductType(e.target.value || "Dvd");
  };

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  useEffect(() => {
    setTimeout(() => {
      [...document.getElementsByClassName("dynamic-field")].forEach(
        (dynamicField) => {
          dynamicField.style.display = dynamicField.classList.contains(
            "visible"
          )
            ? "block"
            : "none";
        }
      );
    }, 500);

    switch (productType) {
      case "Dvd":
        setProductSpecifics({ size: 0 });
        break;
      case "Book":
        setProductSpecifics({ weight: 0 });
        break;
      case "Furniture":
        setProductSpecifics({ height: 0, width: 0, length: 0 });
        break;
      default:
        setProductSpecifics({});
    }

    if (formStatus === "SAVED") {
      alert("Yes!");
    }
  }, [productType, formStatus]);

  return (
    <form id="product_form" autoComplete="off">
      <h1>{formStatus}</h1>
      <div className="form-group">
        <label>SKU</label>
        <input
          id="sku"
          type="text"
          placeholder="product's SKU"
          onChange={(e) => setProductSku(e.target.value)}
          value={productSku}
        />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          id="name"
          type="text"
          placeholder="product's name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          value={productName}
        />
      </div>

      <div className="form-group">
        <label>Price($)</label>
        <input
          id="price"
          type="text"
          placeholder="product's price"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          value={productPrice}
        />
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
        <input
          id="size"
          type="text"
          placeholder="dvd's size"
          onChange={(e) => {
            setProductSpecifics({ size: e.target.value });
          }}
          value={productSpecifics.size || ""}
        />
      </div>
      <div
        className={`form-group dynamic-field ${
          productType !== "Book" ? "hidden" : "visible"
        }`}
      >
        <label>Weight (Kg)</label>
        <input
          id="weight"
          type="text"
          placeholder="books's weight"
          onChange={(e) => {
            setProductSpecifics({ weight: e.target.value });
          }}
          value={productSpecifics.weight || ""}
        />
      </div>
      <div
        className={`dynamic-field ${
          productType !== "Furniture" ? "hidden" : "visible"
        }`}
      >
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            id="height"
            type="text"
            placeholder="furniture's height"
            onChange={(e) => {
              setProductSpecifics({
                ...productSpecifics,
                height: e.target.value,
              });
            }}
            value={productSpecifics.height || ""}
          />
        </div>
        <div className="form-group">
          <label>Width (cm)</label>
          <input
            id="width"
            type="text"
            placeholder="furniture's width"
            onChange={(e) => {
              setProductSpecifics({
                ...productSpecifics,
                width: e.target.value,
              });
            }}
            value={productSpecifics.width || ""}
          />
        </div>
        <div className="form-group">
          <label>Length($)</label>
          <input
            id="length"
            type="text"
            placeholder="furniture's length"
            onChange={(e) => {
              setProductSpecifics({
                ...productSpecifics,
                length: e.target.value,
              });
            }}
            value={productSpecifics.length || ""}
          />
        </div>
      </div>
    </form>
  );
}
