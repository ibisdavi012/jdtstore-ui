import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children, title }) {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Page.defaultProps = { title: "Page Title" };
