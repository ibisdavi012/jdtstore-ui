import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FormField from "./FormField";

import { reset } from "../addProductSlice";

import "./add-product-form.scss";

const productEndpoint = "http://localhost/products";

function AddProductForm(props) {
  const initialState = {
    error: false,
    sku: "",
    name: "",
    price: 0,
    type: "dvd",
    specifics: { size: 0 },
  };

  const selectedType = useRef("DVD");

  const [state, setState] = useState(initialState);

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

    if (state.type !== selectedType.current)
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

    if (formStatus === "SAVING") {
      const productDescription = {
        sku: state.sku,
        name: state.name,
        price: state.price,
        type: state.type,
        ...state.specifics,
      };

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

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <form id="product_form" autoComplete="off">
      <FormField
        label="SKU"
        id="sku"
        value={state.sku}
        onChange={onChange}
        type="sku"
      />
      <FormField
        label="Name"
        id="name"
        value={state.name}
        onChange={onChange}
        type="text"
        minLength={5}
        maxLength={15}
      />

      <FormField
        label="Price in (USD)"
        id="price"
        value={state.price}
        onChange={onChange}
        type="usd"
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

      <FormField
        label="Size (Mb)"
        id="size"
        category="dvd"
        value={state.size}
        onChange={onChange}
        type="unit"
        isDynamic={true}
        unit="mb"
        visible={state.type === "dvd"}
      />

      <FormField
        label="Weight KK (Kg)"
        id="weight"
        category="book"
        value={state.weight}
        onChange={onChange}
        type="unit"
        isDynamic={true}
        unit="kg"
        visible={state.type === "book"}
      />

      <div
        className={`dynamic-field ${
          state.type !== "furniture" ? "hidden" : "visible"
        }`}
      >
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            id="height"
            type="text"
            placeholder="furniture's height"
            onChange={(e) => {
              setState({
                ...state,
                specifics: { ...state.specifics, height: e.target.value },
              });
            }}
            value={state.specifics.height || ""}
          />
        </div>
        <div className="form-group">
          <label>Width (cm)</label>
          <input
            id="width"
            type="text"
            placeholder="furniture's width"
            onChange={(e) => {
              setState({
                ...state,
                specifics: { ...state.specifics, width: e.target.value },
              });
            }}
            value={state.specifics.width || ""}
          />
        </div>
        <div className="form-group">
          <label>Length($)</label>
          <input
            id="length"
            type="text"
            placeholder="furniture's length"
            onChange={(e) => {
              setState({
                ...state,
                specifics: { ...state.specifics, length: e.target.value },
              });
            }}
            value={state.specifics.length || ""}
          />
        </div>
      </div>
    </form>
  );
}

export default withRouter(AddProductForm);
