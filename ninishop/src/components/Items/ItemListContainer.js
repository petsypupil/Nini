import React, {useState, useEffect} from 'react'
import { donitas } from './Item'
import ItemList from './ItemList'

function ItemListContainer({gibberish}) {
   
const [data, setData] = useState ([ ])

const traerProducto = new Promise ((resolve, reject) =>{
  setTimeout(() =>{
    resolve(donitas)
  }, 2000)
}) 

useEffect(() => {
  traerProducto.then ((respuesta) => {
  setData(respuesta);
  })
}, [])


 return (
      <>
      
      <h3>{gibberish}</h3>
      < ItemList data={data} />
      </>
 )
}

export default ItemListContainer
