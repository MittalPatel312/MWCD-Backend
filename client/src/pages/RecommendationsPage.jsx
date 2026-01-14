import { useState } from "react";
import { getRecommendations } from "../api/recommendations.api";

export default function RecommendationsPage() {
  const [consultantId, setConsultantId] = useState("69594d92b30b844b8d71457c");
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  const load = async () => {
    setMessage("");
    try {
      const data = await getRecommendations(consultantId);
      setItems(data.recommended || []);
      if ((data.recommended || []).length === 0) {
        setMessage("No recommendations returned.");
      }
    } catch (err) {
      setMessage("Failed to load recommendations");
    }
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <h2>Recommendations</h2>
        <div className="muted">
          Loads recommended knowledge content for a consultant.
        </div>
      </div>

      <div className="card" style={{ display: "flex", gap: 10 }}>
        <input
          value={consultantId}
          onChange={(e) => setConsultantId(e.target.value)}
          placeholder="Consultant ID"
        />
        <button onClick={load}>Load</button>
      </div>

      {message && (
        <div className="card" style={{ marginTop: 12 }}>
          {message}
        </div>
      )}

      <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
        {items.map((c) => (
          <div key={c._id} className="card">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className="muted">Tags: {c.tags?.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
