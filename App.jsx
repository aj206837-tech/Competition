/** @format */
import React, { useState } from "react";
import Sidebar from "./components/UI/Sidebar";
import TeamsManagement from "../src/pages/TeamsManagement";
import CompetitionSetup from "../src/pages/CompetitionSetup";
import JudgesDashboard from "../src/Jpages/JudgesDashboard";

function App() {
  // غيرنا القيمة الافتراضية لـ "setup" عشان تشوف الصفحة الجديدة أول ما تفتح
  const [activeTab, setActiveTab] = useState("setup");

  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* السايد بار محتاج يتأكد إن فيه زرار بيبعت كلمة "setup" للـ setActiveTab */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-grow-1 overflow-auto">
        {/* التبديل بين الصفحات */}
        {activeTab === "teams" && <TeamsManagement />}
        {activeTab === "judges" && <JudgesDashboard />}

        {/* السطر الجديد لعرض صفحة إعدادات المسابقة */}
        {activeTab === "setup" && <CompetitionSetup />}
      </div>
    </div>
  );
}

export default App;
