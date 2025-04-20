import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {

  return (
    <div className='phonebook'>
      <h1>Phonebook</h1>
      <ContactForm/>
        <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
