import React from 'react'

export default function CompareUnit({guitar}) {



    const { id, title, category, price, desc, img, brand, year } = guitar;

    

    return (
            <article key={id} className='compareguitar-container'>
                <div className='divleft'>
                    <h3>{category}</h3>
                    <h4>{title}</h4>  
                    <div className='price'>
                        <p>£{price}</p>
                        <p></p>
                    </div>
                    <p>{desc}</p>
                    <p>{brand}</p>
                    <p>{year}</p> 
                </div>
            </article>
    )
}