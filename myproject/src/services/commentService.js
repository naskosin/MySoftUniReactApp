const apiUrl = 'https://nasko-fish.herokuapp.com/data/';
export function getAllComments(){
   return fetch('https://nasko-fish.herokuapp.com/data/comments')
     .then(res=>res.json())
   
 }
 export async function createComment(token, text){
    let res = await fetch('https://nasko-fish.herokuapp.com/data/comments', {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
         
       },
       body: JSON.stringify(text)
     });
     let result = await res.json();
     return result;
    };