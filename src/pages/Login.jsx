import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("For now this is just a frontend demo. No real login yet.");
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <div className="form-card">
        <h2 className="form-title">Welcome back</h2>
        <p className="form-subtitle">
          Log in to view your dashboard, track items and manage reports.
        </p>

        <form onSubmit={handleSubmit}>
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
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <span style={{ fontSize: "0.85rem" }}>
              No account?{" "}
              <Link
                to="/register"
                style={{ color: "var(--color-primary)", fontWeight: 500 }}
              >
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
