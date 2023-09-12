import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'Patients',
        borderColor: "rgb(18, 197, 195)",
        borderWidth: 2,
        borderCapStyle: 'round',
        pointBorderColor: 'rgb(18, 197, 195)',
        pointBackgroundColor: 'rgb(18, 197, 195)',       
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 50,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        fill: false,
        gridLines: false,
        data: [65, 59, 80, 81, 56, 55, 40, 60],
      },
      {
        label: 'Doctors',
        borderColor: "rgb(242, 100, 56)",
        borderWidth: 2,
        borderCapStyle: 'round',
        pointBorderColor: 'rgb(242, 100, 56)',
        pointBackgroundColor: 'rgb(242, 100, 56)',
        pointHoverBackgroundColor: 'rgb(242, 100, 56)',
        pointHoverBorderColor: 'rgb(242, 100, 56)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 50,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        fill: false,
        gridLines: false,
        data: [60, 50, 70, 85, 50, 50, 45, 60],
      },
     
    ]
  };
  ;

 const StatusChart=()=> {
   


    return (
      <div>
        
        <Line  data={data} />
      </div>
    );
  

 
};
export default StatusChart;
