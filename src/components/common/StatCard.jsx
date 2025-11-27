function StatCard({ label, value, hint }) {
  return (
    <div
      style={{
        background: "var(--color-card)",
        borderRadius: "var(--radius-md)",
        padding: "16px 18px",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--color-text-muted)",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          marginBottom: "4px",
        }}
      >
        {value}
      </div>
      {hint && (
        <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
          {hint}
        </div>
      )}
    </div>
  );
}

export default StatCard;
