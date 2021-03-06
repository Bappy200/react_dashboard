import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import classes from './Statistics.module.css'
import {statisticData} from '../../infoData';


function Statistics() {
  return (
    <div className={classes.statistics}>
        <h3>statistics</h3>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={statisticData}
            margin={{
              top: 20,
              right: 20,
              bottom: 40,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
  )
}

export default Statistics