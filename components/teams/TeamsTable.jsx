/** @format */

import React from "react";

const TeamsTable = ({ teams }) => (
  <div
    className="card border-0 shadow-sm overflow-hidden"
    style={{ borderRadius: "15px" }}>
    <div className="table-responsive">
      <table className="table align-middle mb-0">
        <thead className="table-light">
          <tr className="text-muted small">
            <th className="ps-4 py-3">Team</th>
            <th>School</th>
            <th>Category</th>
            <th>Members</th>
            <th>Status</th>
            <th>Submission</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ?
            teams.map((team) => (
              <tr key={team.id}>
                <td className="ps-4">
                  <div className="fw-bold">{team.name}</div>
                  <div className="text-muted small">{team.id}</div>
                </td>
                <td>
                  <div>{team.school}</div>
                  <div className="text-muted small">{team.grade}</div>
                </td>
                <td className="small text-muted">{team.category}</td>
                <td>
                  <div className="fw-bold small">
                    {team.members.split(",")[0]}
                  </div>
                  <div className="text-muted small">
                    {team.members.split(",")[1]}
                  </div>
                </td>
                <td>
                  <span
                    className={`badge rounded-pill px-3 py-2 ${
                      team.status === "Approved" ? "bg-success-subtle"
                      : team.status === "Pending" ? "bg-warning-subtle"
                      : "bg-danger-subtle"
                    }`}>
                    {team.status}
                  </span>
                </td>
                <td>
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{ backgroundColor: "#f0f4ff", color: "#4f46e5" }}>
                    {team.submission}
                  </span>
                </td>
                <td className="text-center">
                  <button className="btn btn-link text-dark p-0">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </td>
              </tr>
            ))
          : <tr>
              <td colSpan="7" className="text-center py-5 text-muted">
                No data found.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
);

export default TeamsTable;
