import React, {useState} from 'react';

const UseValidate = () => {
   const [value, setValue] = useState("")

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const validateValue = () => {
       console.log("aaaaa", value)
       if(value.length >  16) {
           return false
       }


       for(let char of value) {
           console.log(char, /[0-9]/ig.test(char))
           if(/[0-9]/ig.test(char)) {
               console.log("wierd")
               return false
           }
       }

        return true
    }


    return {
        value,
        valueChangeHandler,
        validateValue,
    }
};

export default UseValidate;