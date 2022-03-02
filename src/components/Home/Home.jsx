import React from 'react'
import Feature from '../Feature/Feature'
import Layout from '../Layout/Layout'
import RevenueChart from '../RevenueChart/RevenueChart'
import Statistics from '../Statistics/Statistics'
import classes from './Home.module.css'


function Home() {
  return (
    <Layout>
        <div className={classes.homeSection}>
           <Feature/>
           <div className={classes.chart}>
             <RevenueChart/>
             <Statistics/>
           </div>
           <div className={classes.listSection}>
              
           </div>
        </div>
    </Layout>
  )
}

export default Home