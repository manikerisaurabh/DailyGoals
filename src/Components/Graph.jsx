import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Graph = ({ goals }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        drawChart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [goals]);

    const drawChart = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const completedPercentages = [70, 0, 0, 0, 0, 0, 0];

        goals.forEach(goal => {
            const dayIndex = new Date().getDay();
            if (goal.completed) {
                completedPercentages[dayIndex] += (100 / goals.length);
            }
        });

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: daysOfWeek,
                datasets: [{
                    label: '% of Tasks Completed',
                    data: completedPercentages,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    };

    return (
        <div style={{ height: '400px' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Graph;
