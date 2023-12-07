import React from 'react'

export default function ComparePrice({guitarLeftPrice, guitarRightPrice}) {

    const priceDiff = guitarLeftPrice - guitarRightPrice

    

    const diffStyles = {
        color: 'red',
        fontSize: '40px'

    }


    return (
        <>
        <h3
            style={diffStyles}
            className='priceDiff'
        >£{priceDiff}</h3>
        </>
    )
}