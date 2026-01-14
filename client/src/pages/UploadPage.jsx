import { useState } from "react";
import { createContent } from "../api/content.api";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagsText, setTagsText] = useState("react, ui, test");
  const [region, setRegion] = useState("Europe");
  const [createdBy, setCreatedBy] = useState("69593c0d0b2c9a4b8b68baf5");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const tags = tagsText.split(",").map((t) => t.trim()).filter(Boolean);

    try {
      const data = await createContent({
        title,
        description,
        fileUrl: "",
        tags,
        region,
        isSecure: true,
        accessLevel: "INTERNAL",
        createdBy,
      });

      setMessage(`Created content: ${data._id}`);
      setTitle("");
      setDescription("");
    } catch (err) {
      setMessage(` ${err?.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <h2>Upload Knowledge Content</h2>
        <div className="muted">Creates a new KnowledgeContent record using the REST API.</div>
      </div>

      <form onSubmit={onSubmit} className="card" style={{ display: "grid", gap: 10 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ minHeight: 110 }}
        />

        <input
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="Tags (comma-separated)"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="NorthAmerica">NorthAmerica</option>
          </select>

          <input
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            placeholder="createdBy Consultant ID"
          />
        </div>

        <button type="submit" style={{ width: 160 }}>
          Create
        </button>
      </form>

      {message && (
        <div className="card" style={{ marginTop: 12 }}>
          {message}
        </div>
      )}
    </div>
  );
}
