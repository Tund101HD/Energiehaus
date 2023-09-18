import React, {useEffect, useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Axios from "axios";

function getValues(){
    let pro = new Promise((resolve,reject) => {
        Axios.get("http://localhost:3001/values/all/gustspd").then((res) => {
            resolve(res);
        })
    })
    return pro.then((val) => {
        return val;
    })
}
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function DailyGustspeedchart() {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const runOnMount = async () => {
            let s = (await getValues()).data;
            setResponse(s);
        }
        runOnMount().then(r => console.log("Component successfully mounted"))
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tägliche Böengeschwindigkeit',
            },
        },
    };

    let labels = [];
    let values = [];
    for (let i = 0; i < response.length; i++) {
        labels[i] = response[i]["Time"];
    }
    for (let i = 0; i < response.length; i++) {
        values[i] = response[i]["Value"];
        console.log(response[i]["ID"])
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Luftfeuchtigkeit',
                data: values,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    );
}

export default DailyGustspeedchart;