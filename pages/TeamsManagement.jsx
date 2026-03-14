/** @format */

import React, { useState } from "react";
import StatsCard from "../components/teams/StatsCard";
import TableTop from "../components/teams/TableTop";
import TeamsTable from "../components/teams/TeamsTable";
import { mockTeams } from "../data/mockTeams";

const TeamsManagement = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // الـ Logic المطور للبحث الشامل والفلترة
  const filteredTeams = mockTeams.filter((team) => {
    // فلترة الحالة
    const matchesStatus =
      filterStatus === "All" || team.status === filterStatus;

    // البحث في كل البيانات (Name, ID, School, Category)
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
      {/* المكون العلوي (البحث والدروب داون) */}
      <TableTop
        onFilterChange={setFilterStatus}
        onSearchChange={setSearchTerm}
        currentFilter={filterStatus}
      />

      {/* الجدول بالبيانات المفلترة */}
      <TeamsTable teams={filteredTeams} />

      {/* الكروت الإحصائية تتحدث مع الفلتر والبحث */}
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
