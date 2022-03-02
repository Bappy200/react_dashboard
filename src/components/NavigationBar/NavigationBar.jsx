import React from 'react'
import classes from "./NavigationBar.module.css"
import {Settings, Notifications} from '@mui/icons-material';

function NavigationBar() {
  return (
    <header className={classes.headerSection}>
        <div className={classes.logo}>
            <h4>sbappyi</h4>
        </div>
        <nav className={classes.navBar}>
            <ul>
                <li> <Settings className={classes.icons}/></li>
                <li className={classes.notificationIcon}> <Notifications  className={classes.icons}/><span>2</span></li>
                <li> <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="userImage" className={classes.userImage}/></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavigationBar