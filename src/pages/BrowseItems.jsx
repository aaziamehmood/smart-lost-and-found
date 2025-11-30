import { useState, useEffect } from "react";
import "./browse.css";

const sampleItems = [
  {
    id: 1,
    type: "LOST",
    status: "Pending match",
    title: "Black Leather Wallet",
    location: "Library – 2nd Floor",
    date: "2025-11-20",
    image: "/images/sample1.jpg",
  },
  {
    id: 2,
    type: "FOUND",
    status: "Awaiting owner",
    title: "Blue Backpack with Stickers",
    location: "Computer Science Lab",
    date: "2025-11-21",
    image: "/images/sample2.jpg",
  },
  {
    id: 3,
    type: "LOST",
    status: "Matched",
    title: "Silver HP Laptop",
    location: "Cafeteria",
    date: "2025-11-19",
    image: "/images/sample3.jpg",
  },
  {
    id: 4,
    type: "FOUND",
    status: "Matched",
    title: "Student ID Card",
    location: "Main Gate",
    date: "2025-11-18",
    image: "/images/sample4.jpg",
  },
];

export default function BrowseItems() {
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const cards = document.querySelectorAll(".item-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("fade-in");
      }, i * 120);
    });
  }, [filter]);

  const filteredItems =
    filter === "ALL"
      ? sampleItems
      : sampleItems.filter((item) => item.type === filter);

  return (
    <div className="browse-wrapper">
      <div className="browse-inner">

        <h1 className="browse-title">Browse Items</h1>
        <p className="browse-subtitle">
          Search or filter to quickly find lost and found items across the campus.
        </p>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <button
            className={filter === "ALL" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("ALL")}
          >
            All
          </button>
          <button
            className={filter === "LOST" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("LOST")}
          >
            LOST
          </button>
          <button
            className={filter === "FOUND" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("FOUND")}
          >
            FOUND
          </button>

          <input
            type="text"
            placeholder="Search by title, type, or location..."
            className="search-input"
          />
        </div>

        {/* GRID */}
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} className="item-image" alt={item.title} />

              <div className="item-tags">
                <span className={item.type === "LOST" ? "tag tag-lost" : "tag tag-found"}>
                  {item.type}
                </span>

                <span className="tag tag-status">{item.status}</span>
              </div>

              <h3 className="item-title">{item.title}</h3>

              <p className="item-meta">{item.location} • {item.date}</p>

              <button className="details-btn">View details</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
