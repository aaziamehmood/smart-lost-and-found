import React from "react";
import FadeUp from "./FadeUp";

function About() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        color: "#111827",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "100px 20px",
          color: "white",
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 105px)", // full viewport minus navbar
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "700px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            About Smart Lost & Found
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              margin: "0 auto",
            }}
          >
            Helping students and staff recover their lost belongings quickly
            using real-time updates and AI image matching.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {/* Card 1 */}
        <FadeUp className="feature-card">
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f0f9ff",
              padding: "60px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              fontSize: "20px",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginBottom: "15px",
              }}
            >
              Real-Time Updates
            </h3>
            <p>
              See lost and found items instantly as they are reported, with live
              notifications for matches.
            </p>
          </div>
        </FadeUp>

        {/* Card 2 */}
        <FadeUp className="feature-card">
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f0f9ff",
              padding: "60px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              fontSize: "20px",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginBottom: "15px",
              }}
            >
              AI-Powered Matching
            </h3>
            <p>
              Upload an image of your lost item and let AI suggest possible
              matches from found items.
            </p>
          </div>
        </FadeUp>

        {/* Card 3 */}
        <FadeUp className="feature-card">
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f0f9ff",
              padding: "60px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              fontSize: "20px",
            }}
          >
            <h3
              style={{
                color: "#1d4ed8",
                marginBottom: "15px",
              }}
            >
              Secure Claims
            </h3>
            <p>
              Claim your items safely with verified processes, ensuring
              belongings are returned to the rightful owner.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

export default About;
