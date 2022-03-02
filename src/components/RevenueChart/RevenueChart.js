import React from 'react'
// import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import {data} from '../../infoData.js'
import classes from './RevenueChart.module.css'

const cardinal = curveCardinal.tension(0.2);
function RevenueChart() {
  return (
    <div className={classes.chartArea}>
        <h3>Revenue</h3>
        <ResponsiveContainer>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart