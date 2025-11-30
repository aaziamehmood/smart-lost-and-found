import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import FadeUp from "./FadeUp";

// Image paths
const itemImages = [
  "/assets/wallet1.jpg",
  "/assets/key1.jpg",
  "/assets/bag2.jpg",
  "/assets/laptop2.jpg",
  "/assets/bag2.jpg",
  "/assets/usb1.jpg",
  "/assets/bag4.jpg",
  "/assets/usb2.jpg",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // Rotate images every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{ fontSize: "2.6rem", fontWeight: 400, marginBottom: "0px" }}
        >
          Introducing CampusFind:
        </h1>
        <p
          style={{
            fontSize: "2.6rem",
            color: "#ffffff",
            marginTop: "3px",
            marginBottom: "30px",
            maxWidth: "600px",
          }}
        >
          Keys? Wallet? Laptop? Sorted.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/report-lost"
            className="btn btn-primary"
            style={{
              backgroundColor: "#1e3a8a",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 500,
              fontSize: "0.95rem",
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)",
            }}
          >
            Report Lost Item
          </Link>
          <Link
            to="/items"
            className="btn btn-outline"
            style={{
              backgroundColor: "#ffffff",
              color: "#1e3a8a",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 500,
              fontSize: "0.95rem",
              border: "1px solid rgba(37, 99, 235, 0.2)",
            }}
          >
            Browse Items
          </Link>
        </div>

        {/* ROTATING FADE/BLUR IMAGE CIRCLE */}
        <div
          style={{
            marginTop: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              animation: "spin 20s linear infinite",
              boxShadow: "0 0 30px rgba(30, 58, 138, 0.6)",
            }}
          >
            {itemImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: currentIndex === i ? 1 : 0,
                  filter: currentIndex === i ? "blur(0px)" : "blur(6px)",
                  transition:
                    "opacity 1.2s ease-in-out, filter 1.2s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CAMPUSFIND SECTION */}
      <section
        ref={sectionRef}
        style={{
          minHeight: "100vh",
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#0f172a",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "2.6rem",
              color: "#fdfdfdff",
              marginBottom: "10px",
              fontWeight: 400,
            }}
          >
            Why CampusFind:
          </div>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 400,
              marginBottom: "10px",
              marginTop: "5px",
              color: "#d3d6dbff",
            }}
          >
            Built for fast recovery and campus-wide trust
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#d3d6dbff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Our smart matching system helps reunite students with their
            belongings in minutes.
          </p>
        </div>

        <FadeUp>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gridTemplateRows: "140px 140px 140px",
              gridTemplateAreas: `
        "box1 box2"
        "box3 box4"
        "box3 box5"
      `,
              gap: "20px",
              width: "100%",
              maxWidth: "1200px",
              marginTop: "20px",
            }}
          >
            {[
              {
                title: "Fast AI Matching",
                bg: "#1e3a8a",
                color: "#e2e8f0",
                area: "box1",
              },
              {
                title: "High-Yield Access",
                bg: "#ffffff",
                color: "#1e3a8a",
                area: "box2",
              },
              {
                title: "Fully Programmable",
                bg: "#ffffffff",
                color: "#1e3a8a",
                area: "box3",
                images: [
                  "/assets/interface.png",
                  "/assets/verified.png",
                  "/assets/return.png",
                ],
              },
              {
                title: "Near Zero-cost",
                bg: "#1e3a8a",
                color: "#ffffff",
                area: "box4",
              },
              {
                title: "Verified Returns",
                bg: "#fdfdfdff",
                color: "#1e3a8a",
                area: "box5",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  gridArea: item.area,
                  background: item.bg,
                  color: item.color,
                  padding: "20px",
                  borderRadius: "18px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                  Learn quam dolor sit amet, consectetur adipiscing elit.
                </div>

                {/* Images row for Fully Programmable */}
                {item.images && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      gap: "0px",
                      marginTop: "50px",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        style={{
                          width: "100%",
                          maxWidth: "90px",
                          height: "auto",
                          borderRadius: "12px",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

export default Home;
