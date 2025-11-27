function SectionTitle({ kicker, title, subtitle, align = "center" }) {
  return (
    <div
      className="section-header"
      style={{
        textAlign: align,
      }}
    >
      {kicker && <div className="section-kicker">{kicker}</div>}
      <div className="section-title">{title}</div>
      {subtitle && <div className="section-subtitle">{subtitle}</div>}
    </div>
  );
}

export default SectionTitle;
