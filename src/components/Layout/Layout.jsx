import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import SideNavBar from '../SideNavBar/SideNavBar'
import classes from "./Layout.module.css"

function Layout({children}) {
  return (
      <>
        <NavigationBar/>
         <div className={classes.layoutSection}>
            <div className={classes.sideLift}>
                <SideNavBar/>
            </div>
            <div className={classes.sideRight}>
                {children}
            </div>
        </div>
      
      </>
  )
}

export default Layout