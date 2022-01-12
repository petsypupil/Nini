import { donitas } from './Item'
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

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

  const [dona, setdona] = useState ({})

    useEffect(() => {
        traerProducto
        .then(Response => setdona(Response.find(donitas => donitas.id === '3')))
    }, [ ])
    console.log(dona)
    return (
        <div>
            <ItemDetail />
            
        </div>
    )
}

export default ItemDetailContainer
