/** @format */
import React, { useState } from "react";

const CompetitionSetup = () => {
  // 1. تجميع كل بيانات الفورم في State واحدة
  const [formData, setFormData] = useState({
    competitionName: "EduComp 2024",
    year: "2024",
    description: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    submissionDeadline: "",
    maxTeamSize: 5,
    minTeamSize: 1,
  });

  const [categories, setCategories] = useState([
    "Technology",
    "Science",
    "Social Impact",
    "Engineering",
  ]);

  // 2. فانكشن لتحديث البيانات عند الكتابة
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. فانكشن السابمت
  const handleSubmit = (e) => {
    e.preventDefault(); // منع الصفحة من التحميل
    const finalData = { ...formData, categories };

    console.log("Saving Data to Database:", finalData);
    alert("Competition Setup Saved Successfully! ✅");

    // هنا مستقبلاً هنحط كود الـ API (axios.post...)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h2 className="fw-bold mb-4">Competition Setup</h2>

      <div className="row g-4">
        <div className="col-lg-9">
          <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3 border-bottom pb-2">
              Competition Details
            </h5>
            <div className="row g-3">
              <div className="col-md-9">
                <label className="form-label small fw-bold">
                  Competition Name *
                </label>
                <input
                  type="text"
                  name="competitionName"
                  className="form-control"
                  value={formData.competitionName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label small fw-bold">Year *</label>
                <input
                  type="text"
                  name="year"
                  className="form-control"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-bold">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}></textarea>
              </div>
            </div>

            <h5 className="fw-bold mt-4 mb-3 border-bottom pb-2">
              Important Deadlines
            </h5>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label small fw-bold">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-bold">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <h5 className="fw-bold mt-4 mb-3 border-bottom pb-2">
              Competition Categories
            </h5>
            {categories.map((cat, index) => (
              <div key={index} className="d-flex gap-2 mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={cat}
                  readOnly
                />
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() =>
                    setCategories(categories.filter((_, i) => i !== index))
                  }>
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary btn-sm mt-2"
              onClick={() => setCategories([...categories, "New Category"])}>
              + Add Category
            </button>

            <div className="mt-4 pt-3 border-top">
              <button type="submit" className="btn btn-primary px-4 me-2">
                Save Competition Setup
              </button>
              <button
                type="button"
                className="btn btn-secondary px-4"
                onClick={() => window.location.reload()}>
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* الكروت الجانبية (ثابتة زي ما هي) */}
        <div className="col-lg-3">
          <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border-top border-success border-4">
            <h6 className="fw-bold text-muted small mb-3">
              Competition Status
            </h6>
            <span className="badge bg-success-subtle text-success mb-2">
              Active
            </span>
            <div className="small">
              <strong>Registered Teams:</strong> 24
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CompetitionSetup;
