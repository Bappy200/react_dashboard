import React from 'react'
import Feature from '../Feature/Feature'
import Layout from '../Layout/Layout'
import classes from './Analytice.module.css'
import AnalyticeRechart from './AnalyticeRechart'
import {statisticData as data} from '../../infoData';
import NewUserList from '../User/NewUserList'
function Analytice() {
  return (
    <Layout>
        <div className={classes.analyticeSection}>
           <Feature/>
           <div className={classes.analyticeRechart}>
              <AnalyticeRechart title="Analytice Data" data={data}/>
            </div>
            <div className={classes.table_section}>
              <NewUserList title="Product list"/>
            </div>
        </div>
    </Layout>
  )
}

export default Analytice