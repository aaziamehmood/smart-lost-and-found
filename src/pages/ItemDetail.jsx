import { useParams, Link } from "react-router-dom";
import mockItems from "../data/mockItems";

function ItemDetail() {
  const { id } = useParams();
  const item = mockItems.find((i) => i.id === id);

  if (!item) {
    return (
      <section style={{ marginTop: "32px" }}>
        <p>Item not found.</p>
        <Link to="/items" className="btn btn-outline">
          Back to items
        </Link>
      </section>
    );
  }

  const mockMatches =
    item.type === "lost"
      ? mockItems.filter((i) => i.type === "found")
      : mockItems.filter((i) => i.type === "lost");

  return (
    <section style={{ marginTop: "28px" }}>
      <Link
        to="/items"
        style={{
          fontSize: "0.85rem",
          color: "var(--color-primary)",
          display: "inline-block",
          marginBottom: "10px",
        }}
      >
        ← Back to items
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            background: "var(--color-card)",
            borderRadius: "24px",
            padding: "18px 18px 24px",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(15,23,42,0.1))",
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "14px",
              fontWeight: 500,
            }}
          >
            {item.imageLabel || "Item image"}
          </div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
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
              {item.type === "lost" ? "Lost item" : "Found item"}
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
              {item.category}
            </span>
          </div>

          <h2 style={{ margin: 0 }}>{item.title}</h2>
          <p
            style={{
              marginTop: "4px",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
            }}
          >
            {item.location} • {item.date}
          </p>

          <p style={{ marginTop: "12px", fontSize: "0.95rem" }}>
            {item.description}
          </p>

          <div
            style={{
              marginTop: "14px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <button className="btn btn-primary" type="button">
              Mark as claimed (UI)
            </button>
            <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
              In real app this would notify the Lost &amp; Found office.
            </span>
          </div>
        </div>

        <div
          style={{
            background: "var(--color-card)",
            borderRadius: "24px",
            padding: "18px 18px 22px",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Possible matches</h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            For demo purposes we show a few opposite-type items as “matches”.
            Later this will use your AI matching logic and show real similarity
            scores.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {mockMatches.slice(0, 3).map((m) => (
              <li
                key={m.id}
                style={{
                  borderRadius: "14px",
                  border: "1px solid #e5e7eb",
                  padding: "10px 11px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <span style={{ fontSize: "0.92rem", fontWeight: 500 }}>
                    {m.title}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#16a34a",
                      fontWeight: 500,
                    }}
                  >
                    ~{80 + Number(m.id) * 3}% match
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {m.location} • {m.date}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
