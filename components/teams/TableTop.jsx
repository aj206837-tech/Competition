/** @format */

import React from "react";

const TableTop = ({ onFilterChange, onSearchChange, currentFilter }) => {
  const statuses = ["All", "Approved", "Pending", "Rejected"];

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#1a2b4b" }}>
            Teams Management
          </h2>
          <p className="text-muted small">
            Manage team registrations and approvals
          </p>
        </div>
        <button className="btn btn-white border shadow-sm px-4 fw-medium bg-white">
          <i className="bi bi-download me-2"></i>Export
        </button>
      </div>

      {/* البحث والفلترة في حاوية واحدة */}
      <div className="search-filter-wrapper shadow-sm">
        <div className="search-input-group">
          <i className="bi bi-search text-muted"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Search teams or schools..."
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="vr mx-3" style={{ opacity: 0.1, height: "24px" }}></div>

        {/* الـ Dropdown الشيك */}
        <div className="dropdown">
          <button
            className="btn custom-dropdown-btn dropdown-toggle shadow-none"
            type="button"
            data-bs-toggle="dropdown">
            {currentFilter === "All" ? "All Status" : currentFilter}
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow">
            {statuses.map((status) => (
              <li key={status}>
                <button
                  className={`dropdown-item ${currentFilter === status ? "active" : ""}`}
                  onClick={() => onFilterChange(status)}>
                  {status === "All" ? "All Status" : status}
                  {currentFilter === status && (
                    <i className="bi bi-check2 ms-2"></i>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableTop;
