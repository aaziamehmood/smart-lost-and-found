function ReportFound() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("UI only for now. Later this will create a `found` item in MongoDB.");
  };

  return (
    <section style={{ marginTop: "32px" }}>
      <div className="form-card">
        <h2 className="form-title">Report a found item</h2>
        <p className="form-subtitle">
          Items should be handed over to the Lost &amp; Found office according
          to your university rules. This portal helps us find the owner.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Item title</label>
            <input
              className="form-input"
              placeholder="Blue backpack with stickers"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Category</label>
            <select className="form-select" defaultValue="bag">
              <option value="bag">Bag / Backpack</option>
              <option value="wallet">Wallet</option>
              <option value="electronics">Electronics</option>
              <option value="id">ID Card / Documents</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">Where did you find it?</label>
            <input
              className="form-input"
              placeholder="Outside CS Lab 3"
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
              placeholder="Any marks, items inside, etc."
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
              We will store the item details and try to match with lost reports.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReportFound;
