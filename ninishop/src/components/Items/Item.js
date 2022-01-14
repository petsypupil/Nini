import React from 'react'

export const donitas = [
    {id : '1',
    nombre: 'dona de chocolate',
    categoria: 1,
    precio: 150,
    stock : 10,
    },
    {id : '2',
    nombre: 'dona de dulce de leche',
    categoria: 2,
    precio: 120,
    stock : 4,
    },
    {id : '3',
    nombre: 'dona de crema',
    categoria: 2,
    precio: 100,
    stock : 5,
    },
    {id : '4',
    nombre: 'dona de frutilla',
    categoria: 3,
    precio: 170,
    stock : 8,
    },
    {id : '5',
    nombre: 'dona de caramelo',
    categoria: 3,
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


