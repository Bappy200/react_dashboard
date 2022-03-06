import React from 'react'
import classes from './SideNavBar.module.css'
import {Home, Analytics, Insights} from '@mui/icons-material';
import { Link } from 'react-router-dom';


function SideNavBar() {
  return (
    <div className={classes.sideNavBar}>
        <div className={classes.navGroup}>
            <h5>Dashbord</h5>
            <ul className={classes.sideMenu}>
                <li className={classes.active}><Link to="/"><Home className={classes.icon}/> home</Link></li>
                <li><Link to="/analytice"><Analytics className={classes.icon}/>Analytice</Link></li>
                <li><Link to="/selas"><Insights className={classes.icon}/>Selas</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideNavBar