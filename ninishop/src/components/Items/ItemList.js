import React from 'react'
import {Item} from './Item'

function ItemList({data}) {
    return (
        <div>
            {data.map((donita) => (
                <Item key={donita.id} donita={donita}/>
            ))}
        </div>
    )
}

export default ItemList
