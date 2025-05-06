import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

 export const ContactEdit = () => {
  
  
      const { store, dispatch } = useGlobalReducer()
      const navigate = useNavigate();
      const {id} = useParams()
      const [form, SetForm] = useState({
        name:"",
        email:"",
        mobile:"",
        address:""
      })

      useEffect(()=>{
        const contactUser = store.contacts.find(user => user.id == id)
        SetForm(contactUser)
      },[])
      
      const saveChange = (e) =>{
        SetForm({
          ...form,
          [e.target.id]: e.target.value
        })
      }
    
      const updateContact = (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/java/contacts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
         
        })
          .then((resp) => {
            if(resp.ok){
              navigate("/")
            }
            resp.json()})
          .then(data => {
            dispatch({ type: "edit_contact", payload: data.contacts.id})
            
          })
      }
    
      
    
      return (
        <div className="container">
         
          <div className="card p-5">
            <h1>Editar un contacto: </h1>
            <label htmlFor="name">Nombre Completo:</label>
            <input type="text" id="name" name="nombre" placeholder="Introduce tu nombre y apellidos" onChange={saveChange}></input>
            <label htmlFor="mail">Email:</label>
            <input type="text" id="email" name="correo" placeholder="Introduce tu email" onChange={saveChange}></input>
            <label htmlFor="mobile">Numero de telefono:</label>
            <input type="text" id="phone" name="movil" placeholder="Ingresa tu numero de telefono mas operativo" onChange={saveChange}></input>
            <label htmlFor="place">Domicilio(Pais):</label>
            <input type="text" id="address" name="domicilio" placeholder="Ingresa donde resides" onChange={saveChange}></input>
    
          </div>
    
       
          <button onClick={()=>updateContact(id)}>Actualizar</button>
    
          <div>
              <Link to="/">
                <button className="btn btn-primary">Back con</button>
              </Link>
          </div>
          
        </div>
      );
    };

   