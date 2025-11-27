import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import StatCard from "../components/common/StatCard";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: "36px",
          alignItems: "center",
          marginTop: "32px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: "10px",
            }}
          >
            University Lost &amp; Found
          </div>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.15,
              margin: 0,
              fontWeight: 700,
            }}
          >
            Find your lost items
            <br />
            faster with{" "}
            <span style={{ color: "var(--color-primary)" }}>smart matching</span>
            .
          </h1>
          <p
            style={{
              marginTop: "12px",
              color: "var(--color-text-muted)",
              fontSize: "0.98rem",
              maxWidth: 480,
            }}
          >
            A centralized portal for students and staff to report lost or found
            items. Our system uses image and text matching to suggest possible
            matches in seconds.
          </p>

          <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
            <Link to="/report-lost" className="btn btn-primary">
              Report Lost Item
            </Link>
            <Link to="/report-found" className="btn btn-outline">
              Report Found Item
            </Link>
          </div>

          <p
            style={{
              marginTop: "14px",
              fontSize: "0.8rem",
              color: "var(--color-text-muted)",
            }}
          >
            No more notice boards or WhatsApp spam. One portal for the entire
            campus.
          </p>
        </div>

        <div>
          {/* Mock UI card */}
          <div
            style={{
              background: "var(--color-card)",
              borderRadius: "24px",
              boxShadow: "var(--shadow-soft)",
              padding: "18px 18px 20px",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              Smart Match Preview
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  background: "#eff3ff",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#1d4ed8",
                    marginBottom: "4px",
                  }}
                >
                  Lost
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  Black Wallet
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Library • 21 Nov
                </div>
              </div>

              <div
                style={{
                  borderRadius: "16px",
                  background: "#ecfdf5",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#15803d",
                    marginBottom: "4px",
                  }}
                >
                  Found
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  Black Wallet
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-text-muted)",
                    marginTop: "4px",
                  }}
                >
                  Cafeteria • 22 Nov
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: "999px",
                background: "#0f172a",
                color: "#e5e7eb",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.85rem",
              }}
            >
              <span>AI match confidence</span>
              <span style={{ fontWeight: 600, color: "#4ade80" }}>92%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <SectionTitle
          kicker="Why this portal"
          title="Designed for busy students and staff"
          subtitle="Reduce time spent searching for lost items and keep the campus organized."
        />

        <div className="grid grid-3">
          <StatCard
            label="Items tracked"
            value="1,250+"
            hint="Since the start of this semester."
          />
          <StatCard
            label="Average match time"
            value="12 min"
            hint="From report to first suggested match."
          />
          <StatCard
            label="Successful returns"
            value="87%"
            hint="Based on verified matches."
          />
        </div>
      </section>

      {/* How it works */}
      <section
        className="section"
        style={{
          borderRadius: "24px",
          padding: "26px 24px 28px",
          background: "var(--color-bg-dark)",
          color: "#e5e7eb",
          boxShadow: "var(--shadow-soft)",
          marginTop: "60px",
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <div
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#93c5fd",
              marginBottom: "6px",
            }}
          >
            How it works
          </div>
          <h2 style={{ margin: 0, fontSize: "1.8rem" }}>
            Three simple steps to recover what you lost.
          </h2>
          <p
            style={{
              marginTop: "8px",
              fontSize: "0.9rem",
              color: "#cbd5f5",
            }}
          >
            Every report helps. Whether you lost something or found it on a
            bench, adding it to the portal makes the campus safer and more
            honest for everyone.
          </p>
        </div>

        <div
          style={{
            marginTop: "22px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            {
              number: "1",
              title: "Report an item",
              text: "Upload a photo, describe the item and where it was lost or found.",
            },
            {
              number: "2",
              title: "Let AI search",
              text: "We compare your report with all existing entries using text and image similarity.",
            },
            {
              number: "3",
              title: "Confirm and claim",
              text: "If there is a match, the admin verifies and you coordinate pickup.",
            },
          ].map((step) => (
            <div
              key={step.number}
              style={{
                background: "rgba(15,23,42,0.7)",
                borderRadius: "18px",
                padding: "16px 18px",
                border: "1px solid rgba(148,163,184,0.4)",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "999px",
                  background: "#1d4ed8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: "4px",
                  fontSize: "0.95rem",
                }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#cbd5f5" }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div
          style={{
            background: "var(--color-card)",
            borderRadius: "24px",
            padding: "24px 22px",
            boxShadow: "var(--shadow-soft)",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-primary)",
                marginBottom: "6px",
              }}
            >
              Start today
            </div>
            <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
              Ready to make our campus smarter and more honest?
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                marginTop: "6px",
              }}
            >
              It only takes a minute to report a lost or found item. The sooner
              it is in the system, the easier it is to match.
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/register" className="btn btn-primary">
              Create account
            </Link>
            <Link to="/items" className="btn btn-outline">
              Browse current items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
