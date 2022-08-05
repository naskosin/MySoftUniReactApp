import { useState } from "react";




export const useValidateHandler=(initialState )=>{
 

const [error, setError] = useState(initialState);

const setItem = (e) =>{


   let field = e.currentTarget.name;
  
    let email = e.currentTarget.value;
   if (email.length === 0) {
    setError((state) => ({ ...state, email: "Invalid email!" }));
    
  } 
    

let isFormValid = error.email ==="Filled" 
console.log(isFormValid)


return [error, setItem,  isFormValid]


}
}