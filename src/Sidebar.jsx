import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Scale,
  ClipboardCheck,
  Trophy,
  Medal,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className="bg-light shadow p-3"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h3 className="text-dark">EduCompete</h3>
      <p className="d-inline text-secondary p-3">Admin Portal</p>

      <ul className="nav flex-column">

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <LayoutDashboard size={18} className="me-2"/> Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <Users size={18} className="me-2"/> Teams
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <FolderKanban size={18} className="me-2"/> Projects
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <Scale size={18} className="me-2"/> Judges
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <ClipboardCheck size={18} className="me-2"/> Rubrics
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <Trophy size={18} className="me-2"/> Rankings
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <Medal size={18} className="me-2"/> Certificates
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            <Settings size={18} className="me-2"/> Settings
          </a>
        </li>

      </ul>
    </div>
  );
}