/** @format */
import React from "react";

const JTableList = ({ judges }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
      {/* Header بتاع الجدول اللي فيه العدد الإجمالي */}
      <div className="card-header bg-white py-3 border-bottom-0">
        <h6 className="mb-0 fw-bold text-dark">
          Judges ({judges.length} total)
        </h6>
      </div>

      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr className="small text-muted text-uppercase">
              <th className="ps-4" style={{ fontSize: "12px" }}>
                Name
              </th>
              <th style={{ fontSize: "12px" }}>Email</th>
              <th style={{ fontSize: "12px" }}>Expertise</th>
              <th style={{ fontSize: "12px" }}>Assigned Projects</th>
              <th style={{ fontSize: "12px" }}>Status</th>
              <th style={{ fontSize: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {judges.map((j) => (
              <tr key={j.id} className="border-bottom">
                {/* الاسم */}
                <td className="ps-4 fw-bold small text-dark">{j.name}</td>

                {/* الإيميل */}
                <td className="text-muted small">{j.email}</td>

                {/* التخصص */}
                <td className="text-muted small">{j.expertise}</td>

                {/* عدد المشاريع */}
                <td className="ps-5 small text-dark fw-medium">
                  {j.assignedProjects}
                </td>

                {/* الحالة (Active/Busy) */}
                <td>
                  <span
                    className={`badge rounded-pill px-3 py-2 ${
                      j.status === "Active" ?
                        "bg-success bg-opacity-75"
                      : "bg-warning text-dark bg-opacity-75"
                    }`}
                    style={{ fontSize: "11px", minWidth: "70px" }}>
                    {j.status}
                  </span>
                </td>

                {/* أزرار التحكم */}
                <td>
                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-sm btn-outline-primary border-primary-subtle py-1 px-2"
                      style={{ fontSize: "12px" }}>
                      View
                    </button>
                    <button
                      className="btn btn-sm btn-outline-info border-info-subtle py-1 px-2"
                      style={{ fontSize: "12px" }}>
                      Assign
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning border-warning-subtle py-1 px-2"
                      style={{ fontSize: "12px" }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger border-danger-subtle py-1 px-2 text-danger"
                      style={{ fontSize: "12px" }}>
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
  );
};

export default JTableList;
