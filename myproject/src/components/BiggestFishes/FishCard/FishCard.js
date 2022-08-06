import styles from "./FishCard.module.css";
import { useAuthContext } from "../../../contexts/AuthContext";
const FishCard = ({fish, index}) =>{
    const {isLogged} = useAuthContext()
return(
    <article className={styles.top} >
    <p className={styles.top__description}><span className={styles.top__span}>Number: {index+1}  </span></p>
<div className={styles.top__img__wrapper}>
    
    <img src={fish.fish_img} alt=""/> 
    
</div>

<p className={styles.top__description__bottom}><span className={styles.top__span__bottom}>Weight: </span>{fish.weight}</p>
{isLogged ? <span className={styles.top__span__bottom}>Bait: {fish.bait}</span>:<span className={styles.top__span__bottom}>Bait: You must be logged, to see it!</span> }

</article>
)
}
export default FishCard;