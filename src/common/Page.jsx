import Header from "./Header";
import Footer from "./Footer";

import './page.scss';

export default function Page({ children, title }) {
  return (
    <div className="page">
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Page.defaultProps = { title: "Page Title" };
