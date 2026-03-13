import { teamStatus } from "./data";

export default function TeamStatus() {
  return (
    <div style={{background:"#fff",padding:"20px",borderRadius:"10px"}}>
      <h3>Team Status Overview</h3>
      {teamStatus.map(item => (
        <div key={item.id} style={{marginTop:"15px"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div style={{height:"8px",background:"#eee",borderRadius:"5px",marginTop:"5px"}}>
            <div style={{
              width:`${item.percent}%`,
              height:"100%",
              background:"#3b82f6",
              borderRadius:"5px"
            }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}