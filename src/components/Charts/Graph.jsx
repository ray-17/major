import React, { useRef, useEffect } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";
import "./Graph.css";

const Graph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy old chart instance if it exists
    }

    // Register necessary components
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Title);

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
        datasets: [
          {
            label: "Systolic",
            data: [120, 118, 160, 110, 150, 159],
            borderColor: "#C26EB4",
            backgroundColor: "#D946EF50",
            borderWidth: 2,
            pointRadius: 5,
            pointBorderColor: "#fff",
            pointBackgroundColor: "#E66FD2",
            fill: true,
            tension: 0.4, // Makes the graph curved
          },
          {
            label: "Diastolic",
            data: [110, 63, 112, 93 , 75, 79],
            borderColor: "#7E6CAB",
            backgroundColor: "#7C3AED50",
            borderWidth: 2,
            pointBorderColor: "#fff",
            pointBackgroundColor: "#8C6FE6",
            fill: true,
            pointRadius: 5,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 60, 
            max: 180,
            ticks: {
                color:"#072635",
              stepSize: 20, 
              font: {
                family: "Manrope",
                weight:"bold",
              },
            },
          },
          x: {
            ticks: {
              color: "#072635",
            },
            font: {
                family: "Manrope",
                 weight:"bold",
              },
          },
        },
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  return <canvas className="canvas" ref={chartRef} />;
};

export default Graph;
