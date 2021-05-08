import { Paper } from '@material-ui/core'
import React from 'react'
import './index.css'

const Front = () => {
    return (
        <div className="cardWrapper">
        <h1>Why we are ?</h1>
            <div className="row">
                <Paper className="col-sm-3 w-50 card">one</Paper>
                <Paper className="col-sm-3 w-50 card">Two</Paper>
                <Paper className="col-sm-3 w-50 card">Two</Paper>
                <Paper className="col-sm-3 w-50 card">Two</Paper>
            </div>
        </div>
    )
}

export default Front
