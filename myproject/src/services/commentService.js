const apiUrl = 'https://nasko-fish.herokuapp.com/data/';
export function getAllComments(){
   return fetch('https://nasko-fish.herokuapp.com/data/comments')
     .then(res=>res.json())
   
 }