import React, { useEffect, useState } from 'react';
import { getAuditsApi } from "../api/content.api";

export default function Audits() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAuditLogs = async (e) => {
    setLoading(true);
    try {
      const data = await getAuditsApi();
      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuditLogs();
  }, []);

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <h2 style={{ paddingBottom: '12px' }}>Audit Logs</h2>
        <div>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Entity</th>
                <th>Description</th>
                <th>Status</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {
                results?.map((item) => (
                  <tr>
                    <td>{item?.timestamp}</td>
                    <td>{item?.user}</td>
                    <td>{item?.entity}</td>
                    <td>{item?.description}</td>
                    <td>{item?.status}</td>
                    <td>{item?.region}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}