import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { useEffect } from 'react';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,

);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const BarChart = ({ horizontal = false, data_1 = [], data_2 = [], title_1, title_2, bgColor_1, bgColor_2, labels = months }) => {
    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },

        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
        ],
    };

    return <Bar options={options} data={data} />
}


export const DoughnutChart = ({ data = [], backgroundColor, labels, cutout = "80%", legends = true, offset = 0 }) => {

    const doughnutData = {
        labels,
        datasets: [{
            data,
            backgroundColor,
            borderWidth: 0,
            offset
        }]
    };

    const doughbutOptions = {

        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: "bottom",
                labels: {
                    padding: 30
                },
            },
        },
        cutout,
    };

    return <Doughnut data={doughnutData} options={doughbutOptions} />
}





