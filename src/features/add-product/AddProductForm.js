import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { reset } from "./addProductSlice";

import "./add-product-form.scss";

const productEndpoint = "http://localhost/products";

function AddProductForm(props) {
  const initialState = {
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

      console.log(productDescription);

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

  return (
    <form id="product_form" autoComplete="off">
      <div className="form-group">
        <label>SKU</label>
        <input
          id="sku"
          type="text"
          placeholder="product's SKU"
          onChange={(e) => setState({ ...state, sku: e.target.value })}
          value={state.sku || ""}
        />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          id="name"
          type="text"
          placeholder="product's name"
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
          value={state.name || ""}
        />
      </div>

      <div className="form-group">
        <label>Price($)</label>
        <input
          id="price"
          type="text"
          placeholder="product's price"
          onChange={(e) => {
            setState({ ...state, price: e.target.value });
          }}
          value={state.price || ""}
        />
      </div>

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
      <div
        className={`form-group dynamic-field ${
          state.type !== "dvd" ? "hidden" : "visible"
        }`}
      >
        <label>Size (Mb)</label>
        <input
          id="size"
          type="text"
          placeholder="dvd's size"
          onChange={(e) => {
            setState({
              ...state,
              specifics: { ...state.specifics, size: e.target.value },
            });
          }}
          value={state.specifics.size || ""}
        />
      </div>
      <div
        className={`form-group dynamic-field ${
          state.type !== "book" ? "hidden" : "visible"
        }`}
      >
        <label>Weight (Kg)</label>
        <input
          id="weight"
          type="text"
          placeholder="books's weight"
          onChange={(e) => {
            setState({
              ...state,
              specifics: { ...state.specifics, weight: e.target.value },
            });
          }}
          value={state.specifics.weight || ""}
        />
      </div>
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
