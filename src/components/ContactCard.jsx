import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {

    const { store, dispatch } = useGlobalReducer()
    
    
    const deleteContact = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/java/contacts/${contact.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            
        }).then((res) => {
            if (res.ok) {
                dispatch({ type: "delete_contact", payload: contact.id })
                
            }
        }).catch((err) => {
            console.log(err);
        })
    }




    return (

        <div className="container mt-5">
            <div className="card ">
                <div className="row">
                    <div className="col-md-2">
                        <img src="src/assets/img/perfil.avif" alt="Contact" className="contact1" />
                    </div>

                    <div className="col-md-7  mb-3 ">

                        <div className="d-flex"><i class="fa fa-user " id="icononame"></i><p className="ml-3" id="nameid">{contact.name}</p></div>

                        <div className="d-flex"><i class="fa fa-envelope " id="icononame"></i><p className="ml-3" id="nameid">{contact.email}</p></div>
                        
                        <div className="d-flex"><i class="fa fa-mobile" id="icononame"></i><p className="ml-3" id="nameid">{contact.phone}</p></div>

                        <div className="d-flex"><i class="fa fa-globe" id="icononame"></i><p className="ml-3" id="nameid">{contact.address}</p></div>

                    </div>

                    {/* BOTON EDITAR TEXTO*/ }
                    <div className="col-md-3 d-flex flex-column mt-5">
                        <Link to={"/edit_contact/" + contact.id} className="btn btn-link">
                            <i className="fa fa-pencil" id="editicon"/>
                        </Link>

                        <Link className="delete-contact btn btn-link" onClick={()=>deleteContact()}>
                            <i class="fa fa-minus" id="deleteicon"/>
                        </Link>

                    </div>

                    {/* BOTON MODAL TRIGGER*/}

                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button> */}

                    {/* <!-- Modal --> */}
                    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                

            </div>

        </div>


        
    )
}