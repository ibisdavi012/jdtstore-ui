import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FormField from "./FormField";

import { reset, abort } from "../addProductSlice";

import "./add-product-form.scss";
import DynamicFieldGroup from "./DynamicFieldGroup";

const productEndpoint = "http://localhost/products";

function AddProductForm(props) {
  const initialState = {
    sku: "",
    name: "",
    price: 0,
    type: "dvd",
    specifics: { size: 0 },
  };

  const selectedType = useRef("");

  const [state, setState] = useState(initialState);

  const [errors, setErrors] = useState([]);

  const formStatus = useSelector((state) => state.addProduct.formStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formStatus === "CANCEL") {
      dispatch(reset());
      props.history.push("/");
    }

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

    if (state.type !== selectedType.current) {
      switch (state.type) {
        case "dvd":
          setState({ ...state, specifics: { size: 0 } });
          break;
        case "book":
          setState({ ...state, specifics: { weight: 0 } });
          break;
        case "furniture":
          setState({ ...state, specifics: { height: 0, width: 0, length: 0 } });
          break;
        default:
          setState(initialState);
      }

      selectedType.current = state.type;

      const inputs = document.querySelectorAll(
        `input[data-category='${state.type}']`
      );

      inputs.forEach((input) => {
        console.log(input.id);
      });
    }

    if (formStatus === "SAVE_REQUEST") {
      const productDescription = {
        sku: state.sku,
        name: state.name,
        price: state.price,
        type: state.type,
        ...state.specifics,
      };

      if (errors.length) {
        dispatch(abort());
        console.log("Saving was aborted.");
      } else {
        console.log("Ready to save");
      }
    }

    if (formStatus === "SAVING") {
      const productDescription = "";
      axios
        .post(productEndpoint, productDescription)
        .then((response) => {
          dispatch(reset());
          props.history.push("/");
        })
        .catch((error) => {
          console.error("Se ha producido un error.");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.type, formStatus]);

  const onChange = (target) => {
    setState({ ...state, [target.id]: target.value });
  };

  const reportError = (id, error) => {
    if (error) {
      if (!errors.includes(id)) {
        setErrors([...errors, id]);
      }
    } else {
      if (errors.includes(id)) {
        setErrors(errors.filter((target) => target !== id));
      }
    }
  };

  return (
    <form id="product_form" autoComplete="off">
      {errors.length > 0 ? (
        <p className="error-notification">Please fill the requested fields.</p>
      ) : (
        ""
      )}
      <FormField
        label="SKU"
        id="sku"
        value={state.sku}
        onChange={onChange}
        type="sku"
        reportError={reportError}
      />
      <FormField
        label="Name"
        id="name"
        value={state.name}
        onChange={onChange}
        type="text"
        minLength={5}
        maxLength={15}
        reportError={reportError}
      />

      <FormField
        label="Price in (USD)"
        id="price"
        value={state.price}
        onChange={onChange}
        type="usd"
        reportError={reportError}
      />

      <div className="form-group">
        <label>Type Switcher</label>
        <select
          id="productType"
          onChange={(e) => {
            setState({ ...state, type: e.target.value || "dvd" });
          }}
          value={state.type}
        >
          <option id="DVD" value="dvd">
            DVD
          </option>
          <option id="Book" value="book">
            Book
          </option>
          <option id="Furniture" value="furniture">
            Furniture
          </option>
        </select>
      </div>
      <DynamicFieldGroup visible={state.type === "dvd"}>
        <FormField
          label="Size (Mb)"
          id="size"
          category="dvd"
          value={state.size}
          onChange={onChange}
          type="unit"
          unit="mb"
          reportError={reportError}
        />
      </DynamicFieldGroup>
      <DynamicFieldGroup visible={state.type === "book"}>
        <FormField
          label="Weight (Kg)"
          id="weight"
          category="book"
          value={state.weight}
          onChange={onChange}
          type="unit"
          unit="kg"
          reportError={reportError}
        />
      </DynamicFieldGroup>
      <DynamicFieldGroup visible={state.type === "furniture"}>
        <FormField
          label="Height (cm)"
          id="height"
          category="furniture"
          value={state.height}
          onChange={onChange}
          type="units"
          unit="cm"
          reportError={reportError}
        />

        <FormField
          label="Width (cm)"
          id="width"
          category="furniture"
          value={state.width}
          onChange={onChange}
          type="units"
          unit="cm"
          reportError={reportError}
        />
        <FormField
          label="Length (cm)"
          id="length"
          category="furniture"
          value={state.length}
          onChange={onChange}
          type="units"
          unit="cm"
          reportError={reportError}
        />
      </DynamicFieldGroup>
    </form>
  );
}

export default withRouter(AddProductForm);
