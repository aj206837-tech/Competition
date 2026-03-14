/** @format */
import React from "react";

const JAssignmentForm = ({ judges }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      {/* Header القسم */}
      <div className="card-header bg-white border-bottom-0 pt-4 px-4">
        <h6 className="fw-bold mb-0 text-dark">Bulk Assignment</h6>
      </div>

      <div className="card-body p-4 pt-2 text-start">
        {/* اختيار الحكم */}
        <div className="mb-4">
          <label className="small fw-bold text-muted mb-2">Select Judge</label>
          <select className="form-select border border-light-subtle bg-white py-2 shadow-none rounded-3">
            <option>Choose judge...</option>
            {judges.map((j) => (
              <option key={j.id} value={j.id}>
                {j.name}
              </option>
            ))}
          </select>
        </div>

        {/* اختيار المشاريع (Multi-select) */}
        <div className="mb-4">
          <label className="small fw-bold text-muted mb-2">
            Select Projects
          </label>
          <div className="border rounded-3 p-1 bg-white">
            <select
              className="form-select border-0 shadow-none py-0"
              multiple
              style={{ height: "150px", fontSize: "14px" }}>
              <option className="py-2 px-2 border-bottom border-light">
                AI Learning Assistant (Tech Innovators)
              </option>
              <option className="py-2 px-2 border-bottom border-light">
                Sustainable Energy (Code Masters)
              </option>
              <option className="py-2 px-2 border-bottom border-light">
                Community Health App (Future Engineers)
              </option>
              <option className="py-2 px-2 border-bottom border-light">
                Smart Agriculture (Green Solutions)
              </option>
              <option className="py-2 px-2">
                Robotics Workshop (Future Makers)
              </option>
            </select>
          </div>
          <p className="text-muted mt-2 mb-0" style={{ fontSize: "11px" }}>
            <i className="bi bi-info-circle me-1"></i>
            Hold Ctrl (Windows) or Command (Mac) to select multiple projects
          </p>
        </div>

        {/* زر التفعيل */}
        <button className="btn btn-primary px-4 py-2 fw-bold shadow-sm rounded-3 w-auto">
          Assign Projects
        </button>
      </div>
    </div>
  );
};

export default JAssignmentForm;
