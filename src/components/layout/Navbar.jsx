import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <header
      style={{
        background: "#ffffff",
        boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
      }}
    >
      <nav
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
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
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #0f172a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "0.9rem",
            }}
          >
            LF
          </div>
          Smart Lost &amp; Found
        </Link>

        {/* Center links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontSize: "0.9rem",
              color: isActive ? "#111827" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/items"
            style={({ isActive }) => ({
              fontSize: "0.9rem",
              color: isActive ? "#111827" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
            })}
          >
            Browse Items
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              fontSize: "0.9rem",
              color: isActive ? "#111827" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
            })}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin"
            style={({ isActive }) => ({
              fontSize: "0.9rem",
              color: isActive ? "#111827" : "#6b7280",
              fontWeight: isActive ? 600 : 500,
            })}
          >
            Admin
          </NavLink>
        </div>

        {/* Right auth buttons */}
        {!isAuthPage && (
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
