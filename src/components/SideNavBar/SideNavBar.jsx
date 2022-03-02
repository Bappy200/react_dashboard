import React from 'react'
import classes from './SideNavBar.module.css'
import {Home, Analytics, Insights} from '@mui/icons-material';


function SideNavBar() {
  return (
    <div className={classes.sideNavBar}>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Home className={classes.icon}/> home</li>
                <li><Analytics className={classes.icon}/> Analytice</li>
                <li><Insights className={classes.icon}/> selas</li>
            </ul>
        </div>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Home className={classes.icon}/> home</li>
                <li><Analytics className={classes.icon}/> Analytice</li>
                <li><Insights className={classes.icon}/> selas</li>
            </ul>
        </div>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Home className={classes.icon}/> home</li>
                <li><Analytics className={classes.icon}/> Analytice</li>
                <li><Insights className={classes.icon}/> selas</li>
            </ul>
        </div>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Home className={classes.icon}/> home</li>
                <li><Analytics className={classes.icon}/> Analytice</li>
                <li><Insights className={classes.icon}/> selas</li>
            </ul>
        </div>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Home className={classes.icon}/> home</li>
                <li><Analytics className={classes.icon}/> Analytice</li>
                <li><Insights className={classes.icon}/> selas</li>
            </ul>
        </div>
    </div>
  )
}

export default SideNavBar