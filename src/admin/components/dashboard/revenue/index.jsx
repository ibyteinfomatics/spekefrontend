import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

  datasets: [
    {
      label: 'Revenue',
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#12c5c3",
      fill: true,
      gridLines: false,
      lineWidth: 2,
      fillOpacity: 0.5,
      gridTextSize: 10,
      hideHover: 'auto',
      resize: true,
      redraw: true,

      data: [60, 100, 240, 120, 80, 100, 300],
    }


  ]
};
;

const RevenueChart = () => {



  return (
    <div>

      <Line data={data} />
    </div>
  );

};
export default RevenueChart;