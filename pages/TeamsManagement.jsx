/** @format */

import React, { useState } from "react";
import StatsCard from "../components/teams/StatsCard";
import TeamsTable from "../components/teams/TeamsTable";
import { mockTeams } from "../data/mockTeams";

const TeamsManagement = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = mockTeams.filter((team) => {
    const matchesStatus =
      filterStatus === "All" || team.status === filterStatus;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      team.name.toLowerCase().includes(searchLower) ||
      team.id.toLowerCase().includes(searchLower) ||
      team.school.toLowerCase().includes(searchLower) ||
      team.category.toLowerCase().includes(searchLower);

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-4">
      <h2 className="fw-bold mb-4">Teams Management</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "25px",
          width: "100%",
        }}>
        <div style={{ position: "relative", width: "1000px", flexShrink: 0 }}>
          <span
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#adb5bd",
              zIndex: 5,
            }}>
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search teams or schools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              paddingLeft: "45px",
              height: "42px",
              borderRadius: "10px",
              border: "1px solid #dee2e6",
            }}
          />
        </div>

        <div className="dropdown" style={{ width: "150px", flexShrink: 0 }}>
          <button
            className="btn btn-white border shadow-sm dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            style={{
              height: "42px",
              borderRadius: "10px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <span>{filterStatus === "All" ? "All Status" : filterStatus}</span>
          </button>
          <ul className="dropdown-menu shadow border-0 mt-2">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilterStatus("All")}>
                All Status
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilterStatus("Approved")}>
                Approved
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilterStatus("Pending")}>
                Pending
              </button>
            </li>
          </ul>
        </div>
      </div>

      <TeamsTable teams={filteredTeams} />

      <div className="row g-4 mt-2">
        <div className="col-md-4">
          <StatsCard
            title="Total Teams"
            value={filteredTeams.length}
            colorClass="text-dark"
          />
        </div>
        <div className="col-md-4">
          <StatsCard
            title="Approved"
            value={filteredTeams.filter((t) => t.status === "Approved").length}
            colorClass="text-success"
          />
        </div>
        <div className="col-md-4">
          <StatsCard
            title="Pending"
            value={filteredTeams.filter((t) => t.status === "Pending").length}
            colorClass="text-warning"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsManagement;
