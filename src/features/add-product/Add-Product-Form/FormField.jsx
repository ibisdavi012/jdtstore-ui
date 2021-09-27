import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sku, units, text, usd } from "./form-validation";
export default function FormField({
  label,
  id,
  type,
  unit,
  onChange,
  value,
  reportError,
  minLength,
  maxLength,
  category,
}) {
  const [error, setError] = useState("");

  const validate = ({ target }) => {
    let result = {};

    switch (type) {
      case "sku":
        result = sku(target.value);
        break;
      case "units":
        result = units(target.value, unit);
        break;
      case "usd":
        result = usd(target.value, unit);
        break;
      default:
        result = text(target.value, minLength, maxLength);
        break;
    }

    if (!result.pass) {
      setError(result.message);
      reportError(target.id, true);
    } else {
      reportError(target.id, false);
      setError("");
    }
    onChange(target);
  };

  return (
    <div className={`form-group ${error ? "error" : ""} `}>
      <label>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={`${category ? category : "product"}'s ${id.toLowerCase()}`}
        onChange={(e) => validate(e)}
        onBlur={(e) => validate(e)}
        value={value || ""}
        data-category={category}
      />
      {error.length ? <p className="error-message">{error}</p> : ""}
    </div>
  );
}

FormField.defaultProps = {
  label: "Field's Label",
  id: "fields-id",
  minLength: 5,
  maxLength: 15,
};
