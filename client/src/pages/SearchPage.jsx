import { useState } from "react";
import { searchContent } from "../api/content.api";

export default function SearchPage() {
  const [q, setQ] = useState("React");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchContent({ q });
      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <h2>Search Knowledge Content</h2>
        <div className="muted">Search by keyword (title/description).</div>
      </div>

      <form onSubmit={onSearch} className="card" style={{ display: "flex", gap: 10 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. React" />
        <button type="submit" style={{ width: 140 }}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
        {results.map((c) => (
          <div key={c._id} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <h3 style={{ margin: 0 }}>{c.title}</h3>
              <span className="muted">{c.region}</span>
            </div>

            <p style={{ margin: "8px 0", color: "var(--text-main)" }}>{c.description}</p>

            <div className="muted">Tags: {c.tags?.join(", ")}</div>
          </div>
        ))}

        {!loading && results.length === 0 && (
          <div className="muted" style={{ marginTop: 8 }}>
            No results yet. Try searching.
          </div>
        )}
      </div>
    </div>
  );
}
