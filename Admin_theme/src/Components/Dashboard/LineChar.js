import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DashboardAPI from '../../api/DashboardAPI';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top'
		},
		title: {
			display: true,
			text: 'Revenue chart for the year'
		}
	}
};

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
export default function LineChar({data}) {
	const data1 = {
		labels,
		datasets: [
			{
				label: 'Total amount of products sold by month',
				data: [1,5,5],

				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	};

	return <Line options={options} data={data1} />;
}
