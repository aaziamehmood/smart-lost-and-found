import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-root">
      <Navbar />

      <main
        className={isHomePage ? "main-content-full" : "main-content"}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
