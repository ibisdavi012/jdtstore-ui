export default function DynamicFieldGroup({ children, visible }) {
  return (
    <div className={`dynamic-field ${visible ? "visible" : "hidden"}`}>
      {children}
    </div>
  );
}
