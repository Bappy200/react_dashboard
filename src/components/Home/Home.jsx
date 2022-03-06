import React from 'react'
import Feature from '../Feature/Feature'
import Layout from '../Layout/Layout'
import RevenueChart from '../RevenueChart/RevenueChart'
import Statistics from '../Statistics/Statistics'
import NewUserList from '../User/NewUserList'
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
               <NewUserList title="new user list"/>
               <NewUserList title="orders list"/>
           </div>
        </div>
    </Layout>
  )
}

export default Home