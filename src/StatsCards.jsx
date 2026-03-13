import { statsData } from "./data";
import { Users, FolderKanban, Scale , Clock } from "lucide-react";

export default function StatsCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {statsData.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* أيقونة */}
          {item.id === 1 && <Users size={28} />}
          {item.id === 2 && <FolderKanban size={28} />}
          {item.id === 3 && <Scale size={28} />}
          {item.id === 4 && <Clock size={28} />}

          <h4>{item.title}</h4>
          <h2>{item.value}</h2>
          <p style={{ color: "gray" }}>{item.change}</p>
        </div>
      ))}
    </div>
  );
}