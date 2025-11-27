function ReportLost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "This is only the UI. In the full MERN project this form will send data to the backend."
    );
  };

  return (
    <section style={{ marginTop: "32px" }}>
      <div className="form-card">
        <h2 className="form-title">Report a lost item</h2>
        <p className="form-subtitle">
          Provide as many details as you can. This will help our matching system
          and the admin team.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Item title</label>
            <input
              className="form-input"
              placeholder="Black leather wallet"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Category</label>
            <select className="form-select" defaultValue="wallet">
              <option value="wallet">Wallet</option>
              <option value="electronics">Electronics</option>
              <option value="bag">Bag / Backpack</option>
              <option value="id">ID Card / Documents</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">Where did you lose it?</label>
            <input
              className="form-input"
              placeholder="Library 2nd floor, near windows"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Date</label>
            <input className="form-input" type="date" required />
          </div>

          <div className="form-field">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              placeholder="Color, brand, any stickers or marks, things inside, etc."
            />
          </div>

          <div className="form-field">
            <label className="form-label">Upload item photo</label>
            <input className="form-input" type="file" />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Submit report
            </button>
            <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
              Admin will review and AI matching will run soon after submission.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReportLost;
