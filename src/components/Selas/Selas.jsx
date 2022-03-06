import React from 'react'
import Layout from '../Layout/Layout'
import Feature from '../Feature/Feature'
import AnalyticeRechart from '../Analytice/AnalyticeRechart'
import {statisticData as data} from '../../infoData';
import classes from './Selas.module.css'
import NewUserList from '../User/NewUserList';

function Selas() {
  return (
    <Layout>
        <div className={classes.selaseSection}>
          <Feature/>
           <div className={classes.selasRechart}>
              <AnalyticeRechart title="Selas Data" data={data}/>
            </div>
            <div className={classes.table_section}>
              <NewUserList title="selas list"/>
            </div>
        </div>
    </Layout>
  )
}

export default Selas