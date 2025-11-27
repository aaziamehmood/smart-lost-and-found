import { Link } from "react-router-dom";
import StatCard from "../components/common/StatCard";
import ItemCard from "../components/common/ItemCard";
import mockItems from "../data/mockItems";

function Dashboard() {
  const myLost = mockItems.filter((i) => i.type === "lost");
  const myFound = mockItems.filter((i) => i.type === "found");

  return (
    <section style={{ marginTop: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "18px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "1.6rem" }}>Your dashboard</h2>
          <p
            style={{
              margin: 0,
              marginTop: "4px",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
            }}
          >
            Overview of items you have reported and their current status.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/report-lost" className="btn btn-primary">
            + Report Lost Item
          </Link>
          <Link to="/report-found" className="btn btn-outline">
            + Report Found Item
          </Link>
        </div>
      </div>

      <div className="grid grid-3">
        <StatCard
          label="Items you reported"
          value={mockItems.length}
          hint="Lost and found combined."
        />
        <StatCard
          label="Marked as matched"
          value={mockItems.filter((i) => i.status === "Matched").length}
        />
        <StatCard label="Awaiting action" value="3" hint="Pending admin check." />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "24px",
          marginTop: "28px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>Your lost items</h3>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {myLost.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>Items you found</h3>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {myFound.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
