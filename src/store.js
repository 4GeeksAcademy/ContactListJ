export const initialStore=()=>{
  return{
    message: null,
    contacts:[],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {type:""}) {
  switch(action.type){
    case 'get_contacts':
      return{
        ...store,
        contacts:action.payload
      }

    case 'add_contact':
      return{
        ...store,
        contacts:[...store.contacts,action.payload]
      }
    case 'delete_contact':
      let filterContacts = store.contacts.filter(contact => contact.id !== action.payload)
      return {
        
        ...store,
        contacts:filterContacts
      }

    case 'edit_contact':
      let indice = store.findIndex(item => item.id === action.payload.id);
      store[indice] = action.payload;
      return [...store];
      
    default:
      throw Error('Unknown action.');
  }    
}
