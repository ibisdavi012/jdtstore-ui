import PageActions from "./PageActions";
import "../sass/components/header.scss";

function Header() {
  return (
    <header>
      <div className="header__content">
        <div className="page-title">Product List</div>
        <PageActions />
      </div>
      <hr />
    </header>
  );
}

export default Header;
