/** @format */

import React from "react";

const StatsCard = ({ title, value, colorClass }) => (
  <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
    <div className="card-body p-4">
      <p className="text-muted small fw-bold mb-2">{title}</p>
      <h2 className={`fw-bold mb-0 ${colorClass}`}>{value}</h2>
    </div>
  </div>
);

export default StatsCard;
