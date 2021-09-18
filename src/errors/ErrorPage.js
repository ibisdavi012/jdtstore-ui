import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./error-page.scss";

// This component can be extracted into a sepate file and has its own styles
function PageNotFound() {
  return (
    <Error
      title="404 - Not Found"
      message="The requested resource was not found."
    />
  );
}

// This component can be extracted into a sepate file and has its own styles
function Error({ title, message }) {
  return (
    <div className="error-container">
      <h1 className="error-title">{title}</h1>
      <p className="error-message">{message} </p>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

Error.defaultProps = {
  title: "Error",
  message:
    "The application is having problems trying to process your request. Please try again.",
};

export default function ErrorPage({ error }) {
  return (error === 404 && <PageNotFound />) || <Error />;
}

ErrorPage.defaultProps = { error: 0 };
ErrorPage.propTypes = { error: PropTypes.number };
