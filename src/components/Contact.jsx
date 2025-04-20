import { FcBusinessman } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";
import s from './Contact.module.css'
import {deleteContact} from "../redux/contactsSlice.js";
import {useDispatch} from "react-redux";

const Contact = ({user}) => {

    const dispatch = useDispatch()
    const handleDelete = (id) =>{
        dispatch(deleteContact(id))
    }

    const {id, name, number} = user
    return <li className={s.item}>
        <p><FcBusinessman />{name}</p>
        <p><FcIphone />{number}</p>
        <button onClick={()=> handleDelete(id)}>Delete</button>
    </li>;
};

export default Contact;