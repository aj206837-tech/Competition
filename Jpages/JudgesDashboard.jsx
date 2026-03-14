/** @format */
import React from "react";



import JTableList from "../Jcomponents/JudgePortal/JTableList";
import JAssignmentForm from "../Jcomponents/JudgePortal/JAssignmentForm";
import JStatsSummary from "../Jcomponents/JStatsSummary";


import { MockJudge } from "../Jdata/MockJudge";

const JudgesDashboard = () => {
  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container-fluid">
       
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-0">Judge Management</h2>
            <p className="text-muted small">
              Manage and assign projects to competition judges
            </p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary bg-white shadow-sm px-3">
              <i className="bi bi-moon-stars me-2"></i>Toggle Theme
            </button>
            <button className="btn btn-primary px-3 shadow-sm rounded-3">
              <i className="bi bi-plus-circle me-2"></i>Add Judge
            </button>
          </div>
        </div>

        
        <div className="mb-5">
          <JTableList judges={MockJudge} />
        </div>

       
        <div className="row g-4 mb-4">
          <div className="col-lg-7">
            <JAssignmentForm judges={MockJudge} />
          </div>
          <div className="col-lg-5">
            <JStatsSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgesDashboard;
