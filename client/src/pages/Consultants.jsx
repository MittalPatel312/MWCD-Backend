import React, { useEffect, useState } from 'react';
import { getConsultantsApi } from "../api/content.api";

export default function Consultants() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getConsultants = async (e) => {
    setLoading(true);
    try {
      const data = await getConsultantsApi();
      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConsultants();
  }, []);

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <h2 style={{ paddingBottom: '12px' }}>Consultants</h2>
        <div>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Region</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                results?.map((item) => (
                  <tr>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.region}</td>
                    <td>{item?.createdAt}</td>
                    <td>{item?.status}</td>
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