import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { labels } from "./utils";

const LineChart = ({ dataChart }) => {
  // console.log("dataChart:", dataChart);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Ingresos",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Ingresos de hoy, por hora:",
        data: dataChart,
        borderColor: "rgba(0, 222, 136, 0.8)",
        backgroundColor: "rgba(0, 222, 136, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
