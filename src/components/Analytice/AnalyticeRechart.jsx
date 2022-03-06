import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';



const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };

function AnalyticeRechart({title, data}) {
  return (
   <div style={{width:"100%", height:"100%"}}>
       <h3 style={{fontSize:"20px", textTransform:"capitalize", fontWeight:"600", paddingBottom:"15px"}}>{title}</h3>
       <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 40,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                <LabelList dataKey="name" content={renderCustomizedLabel} />
            </Bar>
            <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
            </BarChart>
       </ResponsiveContainer>
   </div>
  )
}

export default AnalyticeRechart