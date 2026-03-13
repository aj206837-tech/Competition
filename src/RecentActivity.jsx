import { activities } from "./data";

export default function RecentActivity() {
  return (
    <div style={{background:"#fff",padding:"10px",borderRadius:"10px"}}>
      <h3>Recent Activity</h3>
      {activities.map(item => (
        <div key={item.id} className="m-0">
          <p style={{fontSize:"20px" , color: " black"}}>{item.text}</p>
          <span style={{color:"gray",fontSize:"15px" }}>{item.time}</span>
        </div>
      ))}
    </div>
  );
}