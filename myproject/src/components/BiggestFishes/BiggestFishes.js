import { useEffect } from 'react';
import { useState } from 'react';
import TopFiveItems from './TopFiveItems';
import styles from './BiggestFishes.module.css';
import * as baitService from '../services/gameServices';


const BiggestFishes =()=>{

const [baits, setBaits] = useState([]);
useEffect(()=>{
    baitService.getAllBaits()
    .then(data=>{
    let topfishes = data.sort((a,b)=>{return b.weight-a.weight});
    setBaits(topfishes)
    })
})


return(
    <> 
<section  >
{baits.map((fish,index)=><TopFiveItems  key = {fish._id} fish={fish} index={index}/>)}

</section>

<div className={styles.no_fishes} ><p><span>Ooops!</span> There's no pretenders for top five, be the first!</p></div></>
)
}
export default BiggestFishes;