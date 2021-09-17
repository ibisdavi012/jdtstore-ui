export default function FormField({
  id,
  label,
  type,
  onChange,
  placeholder,
  value,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

FormField.defaultProps = {
  id: "",
  label: "Field Description",
  type: "text",
  onChange: null,
  placeholder: "Enter this field...",
  groupClass: "",
};
