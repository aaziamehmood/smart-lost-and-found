import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Frontend only: registration will be wired to backend later.");
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <div className="form-card">
        <h2 className="form-title">Create your account</h2>
        <p className="form-subtitle">
          Use your university email so we can verify your identity later.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Full name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Aazia Ali"
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">University email</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@university.edu"
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Role</label>
            <select className="form-select" defaultValue="student" required>
              <option value="student">Student</option>
              <option value="staff">Staff / Faculty</option>
              <option value="admin">Admin (Lost &amp; Found Office)</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Create a strong password"
              required
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
            <span style={{ fontSize: "0.85rem" }}>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{ color: "var(--color-primary)", fontWeight: 500 }}
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
