import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FormField from "./FormField";

import { reset, abort, saved } from "../addProductSlice";

import "./add-product-form.scss";
import DynamicFieldGroup from "./DynamicFieldGroup";
import FormError from "./FormError";

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

  const [displayFormError, setDisplayFormError] = useState(false);

  const [errorSaving, setErrorSaving] = useState(false);

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

      const inputs = document.querySelectorAll(`input`);

      const newErrors = [];

      inputs.forEach(({ value, id, attributes }) => {
        if (!errors.includes(id)) {
          if (
            (attributes["data-category"].value === state.type ||
              attributes["data-category"].value === "default") &&
            value === ""
          ) {
            newErrors.push(id);
          }
        } else {
          if (
            attributes["data-category"].value === state.type ||
            attributes["data-category"].value === "default"
          ) {
            newErrors.push(id);
          }
        }
      });

      setErrors([...newErrors]);
    }

    if (formStatus === "SAVE_REQUEST") {
      setDisplayFormError(true);

      const productDescription = {
        sku: state.sku,
        name: state.name,
        price: parseFloat(state.price.replace(",", "")),
        type: state.type,
        ...state.specifics,
      };

      console.log(productDescription);

      if (errors.length) {
        dispatch(abort());
      } else {
        axios
          .post(productEndpoint, productDescription)
          .then((response) => {
            dispatch(saved());
            props.history.push("/");
          })
          .catch((error) => {
            setErrorSaving(true);
            dispatch(abort());
          });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.type, formStatus, errorSaving]);

  const onChange = (target) => {
    if (state.hasOwnProperty(target.id)) {
      setState({ ...state, [target.id]: target.value });
    } else {
      setState({
        ...state,
        specifics: { ...state.specifics, [target.id]: target.value },
      });
    }

    setDisplayFormError(false);
    setErrorSaving(false);
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
      <FormError
        visible={errors.length > 0 && displayFormError}
        message="You must fill the requested fields in order to proceed."
      />
      <FormError
        visible={errorSaving && displayFormError}
        message="This form could not be saved. Please, check you internet connection,
          the input fields and then try again."
      />

      <FormField
        label="SKU"
        id="sku"
        category="default"
        value={state.sku}
        onChange={onChange}
        type="sku"
        reportError={reportError}
      />
      <FormField
        label="Name"
        id="name"
        category="default"
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
        category="default"
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
        <p className="tool-tip">Please provide DVD's size in Mb.</p>
        <FormField
          label="Size (Mb)"
          id="size"
          category="dvd"
          value={state.specifics.size}
          onChange={onChange}
          type="units"
          unit="mb"
          reportError={reportError}
        />
      </DynamicFieldGroup>
      <DynamicFieldGroup visible={state.type === "book"}>
        <p className="tool-tip">Please provide Book's weight in Kg.</p>
        <FormField
          label="Weight (Kg)"
          id="weight"
          category="book"
          value={state.specifics.weight}
          onChange={onChange}
          type="units"
          unit="kg"
          reportError={reportError}
        />
      </DynamicFieldGroup>
      <DynamicFieldGroup visible={state.type === "furniture"}>
        <p className="tool-tip">Please provide furniture's dimensions in cm.</p>
        <FormField
          label="Height (cm)"
          id="height"
          category="furniture"
          value={state.specifics.height}
          onChange={onChange}
          type="units"
          unit="cm"
          reportError={reportError}
        />

        <FormField
          label="Width (cm)"
          id="width"
          category="furniture"
          value={state.specifics.width}
          onChange={onChange}
          type="units"
          unit="cm"
          reportError={reportError}
        />
        <FormField
          label="Length (cm)"
          id="length"
          category="furniture"
          value={state.specifics.length}
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
