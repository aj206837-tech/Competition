import { announcements } from "./data";

export default function Announcements() {
  return (
    <div style={{background:"#fff",padding:"20px",borderRadius:"10px"}}>
      <h2>Announcements</h2>
       <div className="container">
        <div>
          
      {announcements.map(item => (
        <div key={item.id} style={{marginTop:"10px" , background:" #EAF6FF" , border:"#DFF4FF"}}className="row  rounded ">
          <h4 style={{fontSize:"17px" , padding:"4px", margin:"4px"}}>{item.title}</h4>
          <p style={{fontSize:"15px", color:"gray" }} >{item.desc}</p>
        </div>
      ))}
        </div>
       </div>
    </div>
  );
}