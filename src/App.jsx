import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from "./redux/contactsSlice.js";
import {addFilter} from "./redux/filtersSlice.js";

function App() {

  const contacts = useSelector((state)=> state.contacts.items)
  const searchValue = useSelector((state)=> state.filters.name)
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
