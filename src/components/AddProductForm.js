import { useState } from "react";

import "../sass/components/add-product-form.scss";

export default function AddProductForm() {
  const [productType, setProductType] = useState(1);

  const productTypeChanged = (e) => {
    setProductType(parseInt(e.target.value || 1));
  };

  const bookFields = () => {
    return (
      <div className="form-group">
        <label>Wight (Kg)</label>
        <input id="weight" type="text" placeholder="Enter product weight" />
      </div>
    );
  };

  const furnitureFields = () => {
    return (
      <>
        <div className="form-group">
          <label>Height (Cm)</label>
          <input id="height" type="text" placeholder="Enter height" />
        </div>
        <div className="form-group">
          <label>Width (Cm)</label>
          <input id="width" type="text" placeholder="Enter width" />
        </div>
        <div className="form-group">
          <label>Length (Cm)</label>
          <input id="length" type="text" placeholder="Enter length" />
        </div>
      </>
    );
  };

  const dvdFields = () => {
    return (
      <div className="form-group">
        <label>Size (MM)</label>
        <input id="size" type="text" placeholder="Enter size in Mb" />
      </div>
    );
  };

  const SpecificFields = () => {
    let specificFields;
    switch (productType) {
      case 1:
        specificFields = dvdFields();
        break;
      case 2:
        specificFields = bookFields();
        break;
      case 3:
        specificFields = furnitureFields();
        break;
      default:
        break;
    }
    return specificFields;
  };

  return (
    <form id="product_form" autocomplete="off">
      <div className="form-group">
        <label>SKU</label>
        <input id="sku" type="text" placeholder="Enter product SKU" />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input id="name" type="text" placeholder="Enter product name" />
      </div>
      <div className="form-group">
        <label>Price ($)</label>
        <input id="price" type="text" placeholder="Enter product price" />
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
          <option id="DVD" value="1">
            DVD
          </option>
          <option id="Book" value="2">
            Book
          </option>
          <option id="Furniture" value="3">
            Furniture
          </option>
        </select>
      </div>
      <SpecificFields />
    </form>
  );
}
