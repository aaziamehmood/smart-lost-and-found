import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", color: "#111827" }}>
      <h1 style={{ color: "#1d4ed8", marginBottom: "20px" }}>Contact Us</h1>
      <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
        Have questions or feedback? Fill out the form below and we will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#1d4ed8",
            color: "white",
            fontSize: "1rem",
            fontWeight: 600,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
