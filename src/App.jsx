import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import AddLocalStorage from "./components/AddLocalStorage.jsx";
import {useState} from "react";
import SearchBox from "./components/SearchBox.jsx";

function App() {

  const INITIAL_STATE = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const [userData, setUserData] = AddLocalStorage(INITIAL_STATE, 'initialState')
  const [searchValue, setSearchValue] = useState('')

  const handleDelete = (id) =>{
      const newUserData = userData.filter((user) => id !== user.id)
      setUserData(newUserData)
  }
    const handleChange = (e) =>{
        const currentSearch = e.target.value
        setSearchValue(currentSearch)
    }
    const filteredUserData =  userData.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()) || user.number.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='phonebook'>
      <h1>Phonebook</h1>
      <ContactForm userData={userData} setUserData={setUserData}/>
        <SearchBox   handleChange={handleChange}/>
      <ContactList userData={filteredUserData} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
