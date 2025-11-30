import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar({ isLoggedIn, isAdmin }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <header
      style={{
        background: "#0f172a",
        boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
      }}
    >
      <nav
        style={{
          margin: "0 150px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Left logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 330,
            fontSize: "1.6rem",
          }}
        >
          <img
            src="/assets/found.png" // <-- place your logo file in public/assets
            alt="CampusFind Logo"
            style={{
              width: 32,
              height: 32,
              borderRadius: "8px", // optional: keep rounded corners
              objectFit: "cover", // ensures it fills nicely
            }}
          />
          CampusFind
        </Link>

        {/* Centered NavLinks with lines + emerged pill style */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px 16px",
              borderTop: "1px solid #343941ff",
              borderBottom: "1px solid #343941ff",
              borderRadius: "12px",
              background: "rgba(2, 6, 23, 0.35)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="nav-links"
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  padding: "8px 16px",
                  // borderRadius: "999px",
                  // border: "1px solid rgba(148,163,184,0.22)",
                  // backgroundColor: isActive
                  //   ? "rgba(30,58,138,0.25)"
                  //   : "rgba(255,255,255,0.03)",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "0.98rem",
                  // boxShadow: isActive
                  //   ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                  //   : "inset 0 8px 18px rgba(255,255,255,0.04)",
                  backdropFilter: "blur(6px)",
                  transition: "all 240ms ease",
                  textDecoration: "none",
                })}
              >
                Home
              </NavLink>

              <NavLink
                to="/items"
                style={({ isActive }) => ({
                  padding: "8px 16px",
                  // borderRadius: "999px",
                  // border: "1px solid rgba(148,163,184,0.22)",
                  // backgroundColor: isActive
                  //   ? "rgba(30,58,138,0.25)"
                  //   : "rgba(255,255,255,0.03)",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "0.98rem",
                  // boxShadow: isActive
                  //   ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                  //   : "inset 0 8px 18px rgba(255,255,255,0.04)",
                  backdropFilter: "blur(6px)",
                  transition: "all 240ms ease",
                  textDecoration: "none",
                })}
              >
                Browse Items
              </NavLink>

              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  padding: "8px 16px",
                  // borderRadius: "999px",
                  // border: "1px solid rgba(148,163,184,0.22)",
                  // backgroundColor: isActive
                  //   ? "rgba(30,58,138,0.25)"
                  //   : "rgba(255,255,255,0.03)",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "0.98rem",
                  // boxShadow: isActive
                  //   ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                  //   : "inset 0 8px 18px rgba(255,255,255,0.04)",
                  // backdropFilter: "blur(6px)",
                  transition: "all 240ms ease",
                  textDecoration: "none",
                })}
              >
                About
              </NavLink>

              <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                  padding: "8px 16px",
                  // borderRadius: "999px",
                  // border: "1px solid rgba(148,163,184,0.22)",
                  // backgroundColor: isActive
                  //   ? "rgba(30,58,138,0.25)"
                  //   : "rgba(255,255,255,0.03)",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "0.98rem",
                  // boxShadow: isActive
                  //   ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                  //   : "inset 0 8px 18px rgba(255,255,255,0.04)",
                  backdropFilter: "blur(6px)",
                  transition: "all 240ms ease",
                  textDecoration: "none",
                })}
              >
                User Dashboard
              </NavLink>

              <NavLink
                to="/contactus"
                style={({ isActive }) => ({
                  padding: "8px 16px",
                  // borderRadius: "999px",
                  // border: "1px solid rgba(148,163,184,0.22)",
                  // backgroundColor: isActive
                  //   ? "rgba(30,58,138,0.25)"
                  //   : "rgba(255,255,255,0.03)",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "0.98rem",
                  // boxShadow: isActive
                  //   ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                  //   : "inset 0 8px 18px rgba(255,255,255,0.04)",
                  // backdropFilter: "blur(6px)",
                  transition: "all 240ms ease",
                  textDecoration: "none",
                })}
              >
                Contact Us
              </NavLink>

              {isLoggedIn && isAdmin && (
                <NavLink
                  to="/admin"
                  style={({ isActive }) => ({
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgba(148,163,184,0.22)",
                    backgroundColor: isActive
                      ? "rgba(30,58,138,0.25)"
                      : "rgba(255,255,255,0.03)",
                    color: isActive ? "#ffffff" : "#cbd5f5",
                    fontWeight: isActive ? 500 : 400,
                    fontSize: "0.98rem",
                    boxShadow: isActive
                      ? "0 0 10px rgba(37,99,235,0.35), inset 0 8px 18px rgba(255,255,255,0.06)"
                      : "inset 0 8px 18px rgba(255,255,255,0.04)",
                    backdropFilter: "blur(6px)",
                    transition: "all 240ms ease",
                    textDecoration: "none",
                  })}
                >
                  Admin Dashboard
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Right auth buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {!isAuthPage && !isLoggedIn && (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
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
