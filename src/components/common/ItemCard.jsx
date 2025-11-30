import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div
      style={{
        background: "var(--color-card)",
        borderRadius: "var(--radius-md)",
        padding: "14px 14px 16px",
        boxShadow: "var(--shadow-soft)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hover)")}
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-soft)")}
    >
      <div
        style={{
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(15,23,42,0.1))",
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1f2937",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        {item.imageLabel || "Item preview"}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: "0.75rem",
            padding: "4px 8px",
            borderRadius: "999px",
            background:
              item.type === "lost"
                ? "rgba(239,68,68,0.08)"
                : "rgba(22,163,74,0.08)",
            color: item.type === "lost" ? "#b91c1c" : "#15803d",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {item.type === "lost" ? "Lost" : "Found"}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            padding: "4px 8px",
            borderRadius: "999px",
            background: "rgba(37,99,235,0.06)",
            color: "#1d4ed8",
          }}
        >
          {item.status}
        </span>
      </div>

      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{item.title}</div>
      <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
        {item.location} • {item.date}
      </div>

      <div style={{ marginTop: "8px" }}>
        <Link to={`/items/${item.id}`} className="btn btn-outline" style={{ width: "100%" }}>
          View details
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
