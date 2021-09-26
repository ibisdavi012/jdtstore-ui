import { FaRegFrown } from "react-icons/fa";
export default function FormError({ visible, message }) {
  return visible ? (
    <p className="error-notification">
      <FaRegFrown /> {message}
    </p>
  ) : (
    <></>
  );
}
