import {useState} from 'react';

const UseValidateUsername = () => {
   const [value, setValue] = useState("")

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const validateValue = () => {
       if(value.length >  16) {
           return false
       }


       for(let char of value) {
           if(/[0-9]/ig.test(char)) {
               return false
           }
       }

        return true
    }


    return {
        value,
        usernameValueChangeHandler: valueChangeHandler,
        validateUsername: validateValue,
    }
};

export default UseValidateUsername;



