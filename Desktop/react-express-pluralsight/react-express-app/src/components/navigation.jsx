import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div>
            <Link to="/dashboard" > dashboard </Link>
        </div>
    );
}


export const Cnavigation = connect(state => state)(Navigation);