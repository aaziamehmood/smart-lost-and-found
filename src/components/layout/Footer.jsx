function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        background: "#ffffff",
        marginTop: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "18px 16px 22px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "center",
          fontSize: "0.8rem",
          color: "#6b7280",
        }}
      >
        <div>© {new Date().getFullYear()} Smart Lost &amp; Found Portal</div>
        <div style={{ display: "flex", gap: "14px" }}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
