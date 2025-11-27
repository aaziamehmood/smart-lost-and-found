import { useState } from "react";
import ItemCard from "../components/common/ItemCard";
import mockItems from "../data/mockItems";

function BrowseItems() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = mockItems.filter((item) => {
    if (typeFilter !== "all" && item.type !== typeFilter) return false;
    if (
      search &&
      !item.title.toLowerCase().includes(search.toLowerCase()) &&
      !item.location.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <section style={{ marginTop: "28px" }}>
      <h2 style={{ marginBottom: "6px", fontSize: "1.5rem" }}>Browse items</h2>
      <p
        style={{
          marginTop: 0,
          marginBottom: "18px",
          fontSize: "0.9rem",
          color: "var(--color-text-muted)",
        }}
      >
        Filter by type or search by title and location. This is a preview; later
        it will fetch data from the backend.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "18px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            borderRadius: "999px",
            background: "#e5e7eb",
            padding: "3px",
          }}
        >
          {[
            { value: "all", label: "All" },
            { value: "lost", label: "Lost" },
            { value: "found", label: "Found" },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              className="btn"
              style={{
                padding: "6px 14px",
                fontSize: "0.8rem",
                borderRadius: "999px",
                background:
                  typeFilter === opt.value ? "#ffffff" : "transparent",
                boxShadow:
                  typeFilter === opt.value
                    ? "0 4px 14px rgba(0,0,0,0.08)"
                    : "none",
              }}
              onClick={() => setTypeFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <input
          className="form-input"
          style={{ maxWidth: 260 }}
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 && (
          <div
            style={{
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              marginTop: "10px",
            }}
          >
            No items found with current filters.
          </div>
        )}
      </div>
    </section>
  );
}

export default BrowseItems;
