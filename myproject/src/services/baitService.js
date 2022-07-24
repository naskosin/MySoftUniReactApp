const apiUrl = 'https://nasko-fish.herokuapp.com/data/fishes';

export function getAllBaits(){
    return fetch('https://nasko-fish.herokuapp.com/data/fishes')
      .then(res=>res.json())
    
  }

  export function getOneBait(id){
    return fetch(`${apiUrl}/${id}`)
      .then(res=>res.json())
    
  }


async function resulter(res){
    let jsonResult = await res.json();
    
    if (res.ok){
      return jsonResult;
    }else{
      throw jsonResult.message;
    }
}

