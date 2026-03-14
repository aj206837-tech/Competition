/** @format */

import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "bi-house" },
    { id: "setup", name: "Competition Setup", icon: "bi-gear" },
    { id: "teams", name: "Team Management", icon: "bi-people" },
    { id: "judges", name: "Judge Management", icon: "bi-person-badge" },
    { id: "rubrics", name: "Rubrics", icon: "bi-file-earmark-text" },
    { id: "results", name: "Results & Ranking", icon: "bi-trophy" },
    { id: "certificates", name: "Certificates", icon: "bi-patch-check" },
  ];

  return (
    <div
      className="bg-white border-end d-flex flex-column shadow-sm"
      style={{ width: "280px" }}>
      <div className="p-4 fw-bold fs-4 text-dark mb-2">EduComp</div>
      <div className="nav flex-column px-3 flex-grow-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)} // دي اللي بتغير الصفحة
            className={`nav-link d-flex align-items-center py-2 px-3 mb-2 rounded-3 border-0 transition-all text-start w-100 ${
              activeTab === item.id ?
                "bg-primary text-white shadow"
              : "text-muted bg-transparent"
            }`}>
            <i className={`bi ${item.icon} me-3 fs-5`}></i>
            <span className="fw-medium small">{item.name}</span>
          </button>
        ))}
      </div>
      <div className="p-3 border-top">
        <button className="nav-link text-muted d-flex align-items-center px-3 border-0 bg-transparent w-100">
          <i className="bi bi-box-arrow-right me-3"></i>
          <span className="fw-medium small">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
