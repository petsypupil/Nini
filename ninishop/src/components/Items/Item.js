import React from 'react'

export const donitas = [
    {id : '1',
    nombre: 'dona de chocolate',
    precio: 150,
    stock : 10,
    },
    {id : '2',
    nombre: 'dona de dulce de leche',
    precio: 120,
    stock : 4,
    },
    {id : '3',
    nombre: 'dona de crema',
    precio: 100,
    stock : 5,
    },
    {id : '4',
    nombre: 'dona de frutilla',
    precio: 170,
    stock : 8,
    },
    {id : '5',
    nombre: 'dona de caramelo',
    precio: 150,
    stock : 6,
    }
]

export function Item({donita}) {
    return (
        <div>
         
            <h2>{donita.nombre}</h2>
            <h3>precio: ${donita.precio}</h3>
            <h3>stock disponible: {donita.stock}</h3>
        </div>
    )
}


