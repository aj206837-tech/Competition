import { Line } from "react-chartjs-2";
import { projects } from "./data";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function LineChart() {
  const week1 = projects.filter(p => p.week === 1).length;
  const week2 = projects.filter(p => p.week === 2).length;
  const week3 = projects.filter(p => p.week === 3).length;
  const week4 = projects.filter(p => p.week === 4).length;

  const data = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "Submissions",
        data: [week1, week2, week3, week4],
        borderColor: "blue"
      }
    ]
  };

  return <Line data={data} />;
}