import {useEffect, useState} from "react";

const AddLocalStorage = (data, key) => {
    const [value, setValue] = useState(() => {
        try{
            const dataFromStorage = JSON.parse(localStorage.getItem(key))
            return dataFromStorage.length > 0?
                dataFromStorage : data
        }catch{
            return data
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [value, setValue];

};

export default AddLocalStorage;