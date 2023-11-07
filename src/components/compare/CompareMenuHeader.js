import React from 'react'

import { Outlet, NavLink } from 'react-router-dom'

export default function CompareMenuHeader(){
    


    return (
        <>
            <nav>
                <NavLink classname='compare-tab' id='tab1' to='.'>Compare All</NavLink>
                <NavLink classname='compare-tab' id='tab2' to='saved'>Saved</NavLink>
            </nav>
            <Outlet />
        </>
    )
}