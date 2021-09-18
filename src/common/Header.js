import PageActions from "./PageActions";
import "./header.scss";

function Header(props) {
  return (
    <header>
      <div className="header__content">
        <div className="page-title">{props.title}</div>
        <PageActions />
      </div>
      <hr />
    </header>
  );
}

Header.defaultProps = { title: "Page Title" };

export default Header;
