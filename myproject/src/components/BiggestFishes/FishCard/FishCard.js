import styles from "./topfiveitems.module.css";

const TopFiveItems = ({fish, index}) =>{
return(
    <article className={styles.top} >
    <p className={styles.top__description}><span className={styles.top__span}>Number: {index+1}  </span></p>
<div className={styles.top__img__wrapper}>
    
    <img src={fish.img} alt=""/> 
    
</div>

<p className={styles.top__description__bottom}><span className={styles.top__span__bottom}>Weight: {fish.weight}</span></p>

</article>
)
}
export default TopFiveItems;