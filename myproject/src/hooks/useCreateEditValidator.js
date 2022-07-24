import { useState } from "react";

export const useHandler = (initalState) => {
  const [error, setError] = useState(initalState);
  const setItem = (e) => {
    let field = e.currentTarget.name;
    console.log(field);
    if (field === "species") {
      let species = e.currentTarget.value;
      if (species.length == 0) {
        setError((state) => ({ ...state, species: "Species is required!" }));
        console.log("Hi");
      }
       else if (species.length < 5) {
        setError((state) => ({ ...state, species: "Minimum length is 5 characters!" }));
      }
       else {
        setError((state) => ({ ...state, species: "Filled" }));
      
      }
    } else if (field === "bait") {
      let bait = e.currentTarget.value;
      console.log(bait);
      
      if (bait.length == 0) {
        setError((state) => ({ ...state, bait: "Bait is required!" }));
        console.log("Hi");
      }
       else if (bait.length < 5) {
        setError((state) => ({ ...state, bait: "Must be at least 5 characters long!" }));
      }
       else {
        setError((state) => ({ ...state, bait: "Filled" }));

      }
    }
    
    else  if(field==="img"){
        let img = e.currentTarget.value;
    if (img.length == 0) {
     setError((state) => ({ ...state, img: "Image is required" }));
     console.log("Hi");
   } else if (!img.match(/(http:|https:)+[^\s]+[\w]/)) {
     setError((state) => ({ ...state, img: "Must begin with http:// or https://!" }));
   } else {
     setError((state) => ({ ...state, img: "Filled" }));
    
   }
 }
    
    else if (field === "story") {
        let story = e.currentTarget.value;
        console.log(story);
        if (story.length == 0) {
          setError((state) => ({ ...state, story: "Password required!" }));
        } else {
          setError((state) => ({ ...state, story: "Filled" }));
          
        }
      }else if (field === "weight") {
        let weight = e.currentTarget.value;
        console.log(weight);
        if (weight.length == 0) {
          setError((state) => ({ ...state, weight: "Password required!" }));
        } else {
          setError((state) => ({ ...state, weight: "Filled" }));
      
        }
      }
      
  };
  let isFormValid = error.species =="Filled"  && error.bait== "Filled" && error.img== "Filled" && error.story== "Filled" && error.weight== "Filled" 
  return [error, setItem, isFormValid];
};
