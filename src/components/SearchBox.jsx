import {useId} from "react";
import s from './SearchBox.module.css'

const SearchBox = ({handleChange}) => {
    const searchBoxId = useId()
    return (
        <div className={s.searchBox}>
            <label htmlFor={searchBoxId}>Find contacts by name</label>
            <input className={s.input} type='text' placeholder='Enter name or number...' name='search' id ={searchBoxId} onChange={handleChange}/>
        </div>

    );
};

export default SearchBox;