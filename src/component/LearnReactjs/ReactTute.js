import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./App.css";

function ReactTute() {
  const [remark, setRemark] = useState("");
  const [status, setStatus] = useState("High");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://source.unsplash.com/random/300x200"
      );
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.error("Error fetching random image", error);
    }
  };

  const handleResolve = () => setStatus("Resolved");
  const handleDismiss = () => setStatus("Dismissed");

  return (
    <div className="alert-card">
      {imageUrl && <img src={imageUrl} alt="Random" className="random-image" />}
      <div className="alert-header">
        <div className="alert-title">Human Alert</div>
        <div className="alert-time">5:06 PM</div>
      </div>
      <div className="alert-details">
        <div>🏠 Akshay Nagar</div>
        <div>📅 21-05-2024</div>
        <div>📹 Akshay Nagar NVR2 Cam...</div>
      </div>
      <div className="alert-status">
        <div className={`status ${status.toLowerCase()}`}>{status}</div>
        <div className="buttons">
          <button className="resolve" onClick={handleResolve}>
            Resolve
          </button>
          <button className="dismiss" onClick={handleDismiss}>
            Dismiss
          </button>
        </div>
      </div>
      <div className="remark-section">
        <input
          type="text"
          placeholder="Remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
        <button className="remark-button">+</button>
      </div>
    </div>
  );
}

export default ReactTute;
