import React from 'react'
import ItemList from './ItemList'

const ReviewTutorialList = ({items, handleCheck, handleDelete}) => {


return (
    <main>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p>List is empty</p>
        )}
    </main>
)}

export default ReviewTutorialList
