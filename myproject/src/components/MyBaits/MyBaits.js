
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCatchesItem from './MyCatchesItem';
import styles from './mycatches.module.css';
import * as baitServices from '../../services/baitService';
import { authContext, AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const MyBaits = () => {
    const {userInfo} = authContext();
    const [baits, setBaits] = useState([]);
    
    useEffect(()=>{
        baitServices.getAllBaits().then(data=>{let mycatches=data.filter((x)=>x._ownerId===userInfo._id);
            setBaits(mycatches)})
    },[])

    
    return (




        <section className={styles.my_catches}> 
        <div className={styles.article__header__img__wrapper}>
   <img className={styles.article__header__img} src="assets/fisherman-smiling-holding-tuna-vector-fisherman-smiling-holding-tuna-138952859.jpg" alt="No picture yet" /></div>
   <p className={styles.user}>Catcher: {userInfo.email}</p>
   
  {fishes.length == 0 ?<div className={styles.nocatches}> <p>Oooops! no catches, change the bait!</p></div>: 
   <div className={styles.catches}>
   <p>My catches gallery:</p>
   <ul >
       {baits.map((bait,index)=><MyCatchesItem key={bait._id} bait ={bait} index={index}/>
       )}
  </ul>
   </div>
   }
   </section>
 )
}
export default MyBaits;