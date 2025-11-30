import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({ isLoggedIn, isAdmin }) {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const linkStyle = (isActive) => ({
    fontSize: "1rem",
    padding: "8px 0",
    color: isActive ? "#ffffff" : "#e2e8f0",   // brighter
    fontWeight: isActive ? 700 : 500,          // stronger
    transition: "0.25s ease",
  });

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #1e293b, #334155, #1e3a8a)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 2px 18px rgba(0,0,0,0.35)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          padding: "16px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LOGO LEFT */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/assets/found.png" // <-- place your logo file in public/assets
            alt="CampusFind Logo"
            style={{
              width: 48,
              height: 48,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.3rem",
              fontWeight: 700,
              boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
            }}
          >
            🔑
          </div>

          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.6px",
            }}
          >
            Smart Lost <span style={{ color: "#60a5fa" }}>&</span> Found
          </span>
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: "flex", alignItems: "center", gap: "34px" }}>
          <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
          <NavLink to="/items" style={({ isActive }) => linkStyle(isActive)}>Browse Items</NavLink>
          <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => linkStyle(isActive)}>Dashboard</NavLink>
          <NavLink to="/contactus" style={({ isActive }) => linkStyle(isActive)}>Contact</NavLink>

          {isLoggedIn && isAdmin && (
            <NavLink to="/admin" style={({ isActive }) => linkStyle(isActive)}>
              Admin
            </NavLink>
          )}

          {/* AUTH BUTTONS */}
          {!isAuthPage && !isLoggedIn && (
            <div style={{ display: "flex", gap: "12px" }}>
              <Link
                to="/login"
                style={{
                  padding: "9px 24px",
                  borderRadius: "40px",
                  border: "2px solid white",      // <-- FIXED
                  color: "white",
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              >
                Login
              </Link>

              <Link
                to="/register"
                style={{
                  padding: "9px 26px",
                  borderRadius: "40px",
                  background: "linear-gradient(135deg, #3b82f6, #2563eb, #1e40af)",
                  color: "white",
                  fontWeight: 600,
                  boxShadow: "0 6px 20px rgba(37,99,235,0.45)",
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
