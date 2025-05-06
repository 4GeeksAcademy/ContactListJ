import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";

export const Contacts = ()=>{

    // const navigate= useNavigate();
    const {store, dispatch} =useGlobalReducer()

    // const moveToAddContact = () =>{
    //     navigate("/add_contact")
    // }

    useEffect(()=>{
        fetch("https://playground.4geeks.com/contact/agendas/java",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((resp)=>resp.json())
        .then(data => {
            dispatch({type:"get_contacts", payload:data.contacts})
            
        })

    },[])


    return(
        <div >
            {/* <button className="botonAdd" onClick={moveToAddContact}>Add Contact</button> */}

            <div>{store.contacts?.map((contact,index)=>{
                return (
                    <ContactCard
                            contact={contact}
                            key={index}
                    />
                )
            })}</div>
        </div>

    );



}