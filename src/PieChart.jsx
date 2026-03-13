import { Pie } from "react-chartjs-2";
import { categories } from "./data";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: categories.map(c => c.category),
    datasets: [
      {
        label: "Categories",
        data: categories.map(c => c.value),
        backgroundColor: [
          "green", "purple", "orange", "red", "blue"
        ]
      }
    ]
  };

  // ضبط الرسم يكون responsive ويمتد ليملأ العرض داخل الكارد
  // (بدون تغيير الارتفاع الثابت - عشان ماينزلش للفوق)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // شيلت الـ legend عشان مافيش مساحة إضافية جنب الدايرة
      legend: {
        display: false
      }
    }
  };

  return (
    // الكارد طول 250px ثابت، لكن العرض 100% عشان يملأ الفارغ
    <div style={{ height: 250, width: "100%" }}>
      <Pie
        data={data}
        options={options}
        // يخلي الدايرة تمتلئ الحاوية من غير حواف فارغة
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}