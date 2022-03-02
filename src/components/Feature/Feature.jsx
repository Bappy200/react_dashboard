import React from 'react'
import classes from './Feature.module.css'
import {ViewSidebar, PersonAdd, ShoppingCart, Loyalty} from "@mui/icons-material"
function Feature() {
  return (
    <div className={classes.featureSection}>
        <div className={classes.fetureItem}>
            <ViewSidebar className={classes.icon}/>
            <div className={classes.fetureInfo}>
                <span>15960</span>
                <h6>Visits Today</h6>
            </div>
        </div>
        <div className={classes.fetureItem}>
            <PersonAdd className={classes.icon}/>
            <div className={classes.fetureInfo}>
                <span>15960</span>
                <h6>New User</h6>
            </div>
        </div>
        <div className={classes.fetureItem}>
            <Loyalty className={classes.icon}/>
            <div className={classes.fetureInfo}>
                <span>15960</span>
                <h6>Tottal Sales</h6>
            </div>
        </div>
        <div className={classes.fetureItem}>
            <ShoppingCart className={classes.icon}/>
            <div className={classes.fetureInfo}>
                <span>15960</span>
                <h6>new orders</h6>
            </div>
        </div> 
    </div>
  )
}

export default Feature