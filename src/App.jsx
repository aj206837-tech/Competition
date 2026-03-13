// import Sidebar from "./Sidebar";
// import LineChart from "./LineChart";
// import PieChart from "./PieChart";


// export default function App() {
//   return (
//     <div className="d-flex">
//       <Sidebar />
      

//       <div className="container mt-4">
//         <h2>Admin Dashboard</h2>
//         <p>Welcome back! Here is happening With your comprtition.</p>
//         <div className="row justify-content-center align-content-center  h-25 gap-5 justify-content-between">
//           <div className="col  h-50 rounded-2  d-flex bg-light shadow border  "></div>
//           <div className="col  h-50 rounded-2 d-flex bg-light shadow border "></div>
//           <div className="col   h-50 rounded-2 d-flex light shadow border"></div>
//           <div className="col  h-50 rounded-2  d-flex bg-light shadow border"></div>
//         </div>
//         <div className="row mt-4 flex-nowrap gap-3">
//           <div className="col-6 shadow  ">
//             <h4 className="mt-3">Submition Trend</h4>
//             <LineChart />
//           </div>
//           <div className="col-6 shadow ">
//               <h4 className="mt-3">projects by categories</h4>
//             <PieChart />
//           </div>
//         </div>
//         <div className="row row mt-4 flex-nowrap gap-3  h-25 ">
//           <div className="col-7  h-75 rounded-2  d-flex bg-light shadow border p-0 m-0 "></div>
//           <div className="col-5  h-75 rounded-2  d-flex bg-light shadow border p-0 m-0">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ووووووووووووووووووووووووووووووووووووووووووووووووووووووووووو
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import RecentActivity from "./RecentActivity";
import Announcements from "./Announcements";
import TeamStatus from "./TeamStatus";
import LineChart from "./LineChart";
import PieChart from "./PieChart";


export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Admin Dashboard</h2>
        <p>Welcome back! Here is happening With your competition.</p>

        <StatsCards />

        <div className="row mt-4 flex-nowrap gap-3 w-100">
          <div className="col-6 shadow p-3 bg-light rounded-2 h-75">
            <h4 className="mt-3">Submission Trend</h4>
            <LineChart />
          </div>
          <div
            className="col-6 shadow p-3 bg-light rounded-2" >
       
            <h4 className="mt-3">Projects by Categories</h4>
            <PieChart />
          </div>
        </div>

        <div className="row mt-4 flex-nowrap gap-2">
          <div className="col-7 shadow rounded">
            <RecentActivity />
          </div>
          <div className="col-5 shadow rounded">
            <Announcements />
          </div>
        </div>

        <div className="row mt-4 shadow ">
          <div className="col-12 shadow rounded">
            <TeamStatus />
          </div>
        </div>
      </div>
    </div>
  );
}