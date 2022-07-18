import styles from './BaitCard.module.css';
import { useParams, match } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const BaitCard = ({bait})=>{
    const {userInfo} = useAuthContext();
 
    return (
<li><article>
    <div className={styles.articleimgwrapper}>
    <img className={styles.articleimg} src={bait.img} alt=""/></div>
    
        
        <p></p>
        {userInfo.email ? <div ><button  className={styles.articlebutton}>
          <Link to={`/gallery/${bait._id}`}>Details </Link></button></div> : '' } 
  
   
</article></li>  
    );

};
export default BaitCard;