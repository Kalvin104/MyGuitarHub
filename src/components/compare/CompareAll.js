import React from 'react'

import { Outlet, NavLink } from 'react-router-dom'
import { getGuitars } from '../../api'

export default function CompareAll(){

    const [allGuitars, setAllGuitars] = React.useState([])
    
    function loadData(){
        React.useEffect(() => {
            async function loadAllGuitars(){
                try {
                    const data = await getGuitars()
                    setAllGuitars(data)
                } catch (err) {
                    console.log(err)
                }
            }
            loadAllGuitars()
        }, [])
    }
    loadData()

 console.log(allGuitars)
    return (
        <>
        <h2>Compare All Guitars!</h2>
            <div className='compare'>
                <div className='compare-left'>
                    <h2>1</h2>
                    {allGuitars.map(guitar => {
                        const { id, title, category, price, desc, img, brand, year } = guitar;
                        {
                            return (
                                <article key={id} className='compareguitar-container'>
                                    <div className='divleft'>
                                        <h3>{category}</h3>
                                        <h4>{title}</h4>
                                        <p>{price}</p>
                                        <p>{desc}</p>
                                        <p>{brand}</p>
                                        <p>{year}</p> 
                                    </div> 
                                </article>
                            )
                        }
                    })}
                </div>
                <div className='compare-right'>
                    <h2>2</h2>
                    {allGuitars.map(guitar => {
                        const { id, title, category, price, desc, img, brand, year } = guitar;
                        {
                            return (
                                <article key={id} className='compareguitar-container'>
                                    <div className='divright'>
                                        <h3>{category}</h3>
                                        <h4>{title}</h4>
                                        <p>{price}</p>
                                        <p>{desc}</p>
                                        <p>{brand}</p>
                                        <p>{year}</p> 
                                    </div>
                                
                                </article>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}