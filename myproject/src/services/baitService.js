const apiUrl = 'https://nasko-fish.herokuapp.com/data/fishes';

export function getAllBaits(){
    return fetch('https://nasko-fish.herokuapp.com/data/fishes')
      .then(res=>res.json())
    
  }

  export function getOneBait(id){
    return fetch(`${apiUrl}/${id}`)
      .then(res=>res.json())
    
  }
  export async function createOne(token, petData){
    let res = await fetch('https://nasko-fish.herokuapp.com/data/fishes', {
       method: 'POST',
       headers: {
         'content-type': 'applications/json',
         'X-Authorization' : token,
         
       },
       body: JSON.stringify(petData)
     });
     let result = await res.json();
     return result;
    };

    export async function editOneBait(token, petData){
      let res = await fetch('https://nasko-fish.herokuapp.com/data/fishes', {
         method: 'POST',
         headers: {
           'content-type': 'applications/json',
           'X-Authorization' : token,
           
         },
         body: JSON.stringify(petData)
       });
       let result = await res.json();
       return result;
      };



async function resulter(res){
    let jsonResult = await res.json();
    
    if (res.ok){
      return jsonResult;
    }else{
      throw jsonResult.message;
    }
}

