import Contact from "./Contact.jsx";

const ContactList = ({userData, handleDelete}) => {

    return <ul>
        {userData.map(user => <Contact key={user.id} user={user} handleDelete={handleDelete}/>
        )}
    </ul>
};

export default ContactList;