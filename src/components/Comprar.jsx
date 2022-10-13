//@ts-check

import React from 'react'
import { useState } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore'


export default function Comprar() {



    const[nombre, setNombre]= useState("")
    const[telefono, setTelefono]= useState("")
    const[email, setEmail]= useState("")

    const[idCompra, setIdCompra]= useState("")
    const[cartel, setCartel]= useState("")

    const[apagarBoton, setApagarBoton]= useState(false)

    function terminarCompra() {
        if (!nombre || !telefono || !email){          
          setCartel('Controle por favor el haber puesto el nombre, telefono o email ')
                    
          return
         
        }

        setApagarBoton(true)

        let ordenDeCompra = {buyer : {name: nombre, phone: telefono, email:email}, carrito:[{id:"CTbA0e0FIIThIkx0dfXJ", title:"Campera Adidas", price:2000, cant:5}
    ],
    total:3100
}

    const db= getFirestore()

    const miColeccion= collection(db,'orders' )

    addDoc(miColeccion,ordenDeCompra). then(({id}) => {
      setIdCompra(id)
    }) .catch ((e)=> {
      setApagarBoton(false)
    })

    }    

  return (
    <div>
      <br/>
      <h2>➡️Muchas gracias por su compra🛒🛒, ingrese a continuacion sus datos: </h2>

      <br/>

        {cartel && 'Ha ocurrido un error, ' + cartel}
       <br />
      <br/>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' type={"text"}/>
        <br/>
        <input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder='Telefono' type={"text"}/>
        <br/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' type={"text"}/>
        <br/>
        <br/>
        {!idCompra?  !apagarBoton ? <button onClick={terminarCompra}>TERMINAR COMPRA</button> :'Loading..' : <h4>Gracias por su compra Sr.{nombre}, a continuacion, su numero de ticket asignado es  + {idCompra } </h4> }
        <br/>

    </div>
  );
}
