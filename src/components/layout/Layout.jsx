import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
