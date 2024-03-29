import { useState } from "react";

export const useHandler = (initalState) => {
  const [error, setError] = useState(initalState);
  const setItem = (e) => {
    let field = e.currentTarget.name;
   
    if (field === "baitType") {
      let species = e.currentTarget.value;
      if (species.length === 0) {
        setError((state) => ({ ...state, baitType: "Bait type is required!" }));
    
      }
       else if (species.length < 5) {
        setError((state) => ({ ...state, baitType: "Minimum length is 5 characters!" }));
      }
       else {
        setError((state) => ({ ...state, baitType: "Filled" }));
      
      }
    } else if (field === "bait") {
      let bait = e.currentTarget.value;
     
      
      if (bait.length === 0) {
        setError((state) => ({ ...state, bait: "Bait is required!" }));
       
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
    if (img.length === 0) {
     setError((state) => ({ ...state, img: "Image is required" }));
   
   } else if (!img.match(/(http:|https:)+[^\s]+[\w]/)) {
     setError((state) => ({ ...state, img: "Must begin with http:// or https://!" }));
   } else {
     setError((state) => ({ ...state, img: "Filled" }));
    
   }
 }
 else  if(field==="fish_img"){
  let fish_img = e.currentTarget.value;
if (fish_img.length === 0) {
setError((state) => ({ ...state, fish_img: "Image is required" }));

} else if (!fish_img.match(/(http:|https:)+[^\s]+[\w]/)) {
setError((state) => ({ ...state, fish_img: "Must begin with http:// or https://!" }));
} else {
setError((state) => ({ ...state, fish_img: "Filled" }));

}
}  
    else if (field === "story") {
        let story = e.currentTarget.value;
      
        if (story.length === 0) {
          setError((state) => ({ ...state, story: "Story required!" }));
        } else {
          setError((state) => ({ ...state, story: "Filled" }));
          
        }
      }else if (field === "weight") {
        let weight = e.currentTarget.value;
        console.log(weight)
        if (weight.length === 0) {
          setError((state) => ({ ...state, weight: "Weight required!" }));
        }else if (!weight.match(/(^[1-9][0-9]*)/)) {
          
          setError((state) => ({ ...state, weight: "Must be positive number!" }));
          }
        
        else {
          setError((state) => ({ ...state, weight: "Filled" }));
      
        }
      }
      
  };
  
  let isFormValid = error.baitType ==="Filled"  && error.bait=== "Filled" && error.img=== "Filled" && error.story=== "Filled" && error.weight=== "Filled" &&error.img=== "Filled" && error.fish_img=== "Filled"

  return [error, setItem, isFormValid];
};
