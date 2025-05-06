import React, { useState, } from "react";
// Import necessary components from react-router-dom and other parts of the application.
import { Link , useNavigate} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const AddContact = ()=>{

  const { store, dispatch } = useGlobalReducer()
   const navigate = useNavigate();

  const [form, SetForm] = useState({
    name:"",
    email:"",
    mobile:"",
    address:""
  })

  const saveChange = (e) =>{
    SetForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const newContact = () => {
    fetch("https://playground.4geeks.com/contact/agendas/java/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((resp) => resp.json())
      .then(data => {
        dispatch({ type: "add_contact", payload: data})
        navigate("/")
        console.log(store)
      })
  }


  return (
    <div className="container mt-5">
     
      <div className="card p-5">
        <h1>Agregar un contacto: </h1>
        <label htmlFor="name">Nombre Completo:</label>
        <input type="text" id="name" name="nombre" placeholder="Introduce tu nombre y apellidos" onChange={saveChange}></input>
        <label htmlFor="mail">Email:</label>
        <input type="text" id="email" name="correo" placeholder="Introduce tu email" onChange={saveChange}></input>
        <label htmlFor="mobile">Numero de telefono:</label>
        <input type="text" id="phone" name="movil" placeholder="Ingresa tu numero de telefono mas operativo" onChange={saveChange}></input>
        <label htmlFor="place">Domicilio(Pais):</label>
        <input type="text" id="address" name="domicilio" placeholder="Ingresa donde resides" onChange={saveChange}></input>

      </div>

   
      
      <div className="d-flex justify-content-center align-items-center gap-4 mt-5">
          <Link to="/">
            <button className="addBtn">Contactos</button>
          </Link>

          <button onClick={newContact} className="addBtn">Crear contacto</button>
      </div>
      
    </div>
  );
};