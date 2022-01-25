import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const donitas = [
  {
    id: "1",
    nombre: "dona de chocolate",
    categoria: 1,
    precio: 150,
    stock: 10,
    img: 'dona1',
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quod quia iure, necessitatibus magnam ipsam repellat dicta architecto possimus?",
  },
  {
    id: "2",
    nombre: "dona de dulce de leche",
    categoria: 2,
    precio: 120,
    stock: 4,
    img: 'dona2',
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quod quia iure, necessitatibus magnam ipsam repellat dicta architecto possimus?",
  },
  {
    id: "3",
    nombre: "dona de crema",
    categoria: 2,
    precio: 100,
    stock: 5,
    img: 'dona3',
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quod quia iure, necessitatibus magnam ipsam repellat dicta architecto possimus?",
  },
  {
    id: "4",
    nombre: "dona de frutilla",
    categoria: 3,
    precio: 170,
    stock: 8,
    img: 'dona4',
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quod quia iure, necessitatibus magnam ipsam repellat dicta architecto possimus?",
  },
  {
    id: "5",
    nombre: "dona de caramelo",
    categoria: 3,
    precio: 150,
    stock: 6,
    img: 'dona5',
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quod quia iure, necessitatibus magnam ipsam repellat dicta architecto possimus?",
  },
];

export function Item({ donita }) {
  return (
    <div className="container">
      <div className="item">
      <Link to={`/item/${donita.id}`}> <img className="donitas" src={require(`./resources/${donita.img}.jpg`)} /> </Link>
        <h3 className="Titulo">{donita.nombre}</h3>
        <p className="info"> Precio:$${donita.precio}</p>
        <p className="info"> descripcion:{donita.descripcion}</p>
       <button className="btnCarrito"> agregar al carrito </button>
        
      </div>
    </div>
  );
}