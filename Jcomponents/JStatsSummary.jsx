/** @format */
import React from "react";

const JStatsSummary = () => {
  // داتا تجريبية للإحصائيات بناءً على الصور
  const stats = {
    totalProjects: 18,
    assignedProjects: 15,
    unassignedProjects: 3,
    avgLoad: 4.5,
    completionRate: 83,
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white">
      {/* العنوان */}
      <h6 className="fw-bold mb-4 border-bottom pb-2 text-dark">
        Assignment Statistics
      </h6>

      {/* الأرقام والبيانات */}
      <div className="d-flex flex-column gap-3 mb-4 text-start">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold small text-secondary">Total Projects:</span>
          <span className="fw-bold text-dark">{stats.totalProjects}</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold small text-secondary">
            Assigned Projects:
          </span>
          <span className="fw-bold text-dark">{stats.assignedProjects}</span>
        </div>

        <div className="d-flex justify-content-between align-items-center border-top pt-2">
          <span className="fw-bold small text-danger">
            Unassigned Projects:
          </span>
          <span className="fw-bold text-danger">
            {stats.unassignedProjects}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold small text-secondary">
            Average Load per Judge:
          </span>
          <span className="fw-bold text-dark">{stats.avgLoad} projects</span>
        </div>
      </div>

      {/* الـ Progress Bar (اللي كان في الصورة) */}
      <div className="mt-auto">
        <div className="d-flex justify-content-between mb-1">
          <span className="text-muted" style={{ fontSize: "11px" }}>
            Project assignment completion
          </span>
          <span className="fw-bold text-primary" style={{ fontSize: "11px" }}>
            {stats.completionRate}%
          </span>
        </div>
        <div
          className="progress rounded-pill shadow-none"
          style={{ height: "8px", backgroundColor: "#e9ecef" }}>
          <div
            className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${stats.completionRate}%` }}
            aria-valuenow={stats.completionRate}
            aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  );
};

export default JStatsSummary;
