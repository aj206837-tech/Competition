/** @format */
import React from "react";

import { mockJudges } from "../data/Mockjudge";

const JudgeManagement = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Judge Management</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-white border shadow-sm px-3">
            <i className="bi bi-moon-stars me-2"></i>Toggle Theme
          </button>
          <button className="btn btn-primary px-3 shadow-sm">
            <i className="bi bi-plus-circle me-2"></i>Add Judge
          </button>
        </div>
      </div>

 
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr className="small text-muted">
                <th className="ps-4">Name</th>
                <th>Email</th>
                <th>Expertise</th>
                <th>Assigned Projects</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
             
              {mockJudges.map((j) => (
                <tr key={j.id}>
                  <td className="ps-4 fw-bold small">{j.name}</td>
                  <td className="text-muted small">{j.email}</td>
                  <td className="text-muted small">{j.expertise}</td>
                  <td className="ps-5 small">{j.assignedProjects}</td>
                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${j.status === "Active" ? "bg-success" : "bg-warning text-dark"}`}>
                      {j.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="btn-group gap-1">
                      <button className="btn btn-sm btn-outline-primary py-1 px-2 border-0 text-primary">
                        View
                      </button>
                      <button className="btn btn-sm btn-outline-info py-1 px-2 border-0 text-info">
                        Assign
                      </button>
                      <button className="btn btn-sm btn-outline-warning py-1 px-2 border-0 text-warning">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger py-1 px-2 border-0 text-danger">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  );
};

export default JudgeManagement;
