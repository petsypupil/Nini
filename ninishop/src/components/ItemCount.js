import React from 'react'
import {useState} from 'react'

function ItemCount({stock, initial}) {

    const [count, setCount] = useState(initial)

    const suma = () => {
        
        if (count < stock){
            
            setCount(count + 1)

        }
    }

    const resta = () => {

        if (count > initial ){
            setCount(count - 1)

        }
    }
    

    return (
        <div>
            <button onClick={suma}> mas </button>
            {count}
            <button onClick={resta}> menos </button>
        </div>
    )
}

export default ItemCount
