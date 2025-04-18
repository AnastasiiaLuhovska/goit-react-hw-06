import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addFilter, deleteContact} from "./redux/actions.js";

function App() {

  const contacts = useSelector((state)=> state.contacts)
  const searchValue = useSelector((state)=> state.filteredContacts)
  const dispatch = useDispatch()


  const handleDelete = (id) =>{
        dispatch(deleteContact(id))
  }
    const handleChange = (e) =>{
        const currentSearch = e.target.value
        dispatch(addFilter(currentSearch))
    }
    const filteredUserData =  contacts.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.number.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='phonebook'>
      <h1>Phonebook</h1>
      <ContactForm/>
        <SearchBox  handleChange={handleChange}/>
      <ContactList userData={filteredUserData} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
