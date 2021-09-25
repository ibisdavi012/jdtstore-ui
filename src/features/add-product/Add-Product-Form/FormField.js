import { useState, useEffect } from "react";
import { sku, units, text, usd } from "./form-validation";
export default function FormField({
  label,
  id,
  type,
  unit,
  onChange,
  value,
  reportError,
}) {
  const [error, setError] = useState("");

  const validate = (e) => {
    let result = {};

    switch (type) {
      case "sku":
        result = sku(e.target.value);
        break;
      case "units":
        result = units(e.target.value, unit);
        break;
      case "price":
        break;
      default:
        result = text(e.target.value);
        break;
    }

    if (!result.pass) {
      setError(result.message);
    } else {
      setError("");
    }
    onChange(e);
  };

  return (
    <div className={`form-group ${error ? "error" : ""}`}>
      <label>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={`product's ${id.toLowerCase()}`}
        onChange={(e) => validate(e)}
        value={value || ""}
      />
      {error.length ? <p className="error-message">{error}</p> : ""}
    </div>
  );
}

FormField.defaultProps = {
  label: "Field's Label",
  id: "fields-id",
};
