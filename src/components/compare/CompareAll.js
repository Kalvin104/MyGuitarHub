import React from 'react'

import { Outlet, NavLink } from 'react-router-dom'
import { getGuitars } from '../../api'

import CompareUnit from './CompareUnit'
import ComparePrice from './ComparePrice'

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

    const guitarLeft = allGuitars.filter(guitar => guitar.id === '1')
    const guitarRight = allGuitars.filter(guitar => guitar.id === '6')

    const guitarLeftPrice = guitarLeft.map(guitar => {
        const { price } = guitar
        return price
    })

    const guitarRightPrice = guitarRight.map(guitar => {
        const { price } = guitar
        return price
    })

    

    return (
        <>
        <h2 style={{textAlign: 'center'}}>Compare All Guitars!</h2>
            <div className='compare'>
                <div className='compare-left'>
                    {guitarLeft.map(guitar => {
                        const { id, title, category, price, desc, img, brand, year } = guitar;
                        {
                            return (
                                <CompareUnit 
                                    guitar={guitar}
                                />
                            )
                        }
                    })}
                </div>
                <div style={{paddingTop: '75px'}}>
                    <ComparePrice
                        guitarLeftPrice={guitarLeftPrice}
                        guitarRightPrice={guitarRightPrice}
                    />
                </div>
                <div className='compare-right'>
                    {guitarRight.map(guitar => {
                        const { id, title, category, price, desc, img, brand, year } = guitar;
                        {
                            return (
                                <CompareUnit 
                                guitar={guitar}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}