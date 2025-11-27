import mockItems from "../data/mockItems";

function AdminDashboard() {
  return (
    <section style={{ marginTop: "28px" }}>
      <h2 style={{ marginBottom: "6px", fontSize: "1.5rem" }}>
        Admin dashboard
      </h2>
      <p
        style={{
          marginTop: 0,
          marginBottom: "18px",
          fontSize: "0.9rem",
          color: "var(--color-text-muted)",
        }}
      >
        Preview of how the admin will monitor reports and verify matches. Only
        frontend for now.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 16,
          marginBottom: 22,
        }}
      >
        <div className="table-card">
          <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Total items</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {mockItems.length}
          </div>
        </div>
        <div className="table-card">
          <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            Items marked as matched
          </div>
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {mockItems.filter((i) => i.status === "Matched").length}
          </div>
        </div>
        <div className="table-card">
          <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            Lost vs Found ratio
          </div>
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {mockItems.filter((i) => i.type === "lost").length} :{" "}
            {mockItems.filter((i) => i.type === "found").length}
          </div>
        </div>
      </div>

      <div className="table-card">
        <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: "1rem" }}>
          Recent reports
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action (UI)</th>
            </tr>
          </thead>
          <tbody>
            {mockItems.map((item) => (
              <tr key={item.id}>
                <td style={{ textTransform: "capitalize" }}>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-outline"
                    style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                    type="button"
                  >
                    Review match
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminDashboard;
