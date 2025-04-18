import {configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer.js";
import filtersReducer from "./filtersReducer.js";

 const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        filteredContacts: filtersReducer
    }
})

export default store