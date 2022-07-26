import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <footer >
  
    <div className={styles.description}>
        <img className={styles.footer__img}  src="assets/800px_COLOURBOX10756422.jpg" alt="" />
        <p className={styles.description__paragraph}>Spinning is one of the most widespread and popular techniques around the world that can be done in both saltwater and freshwater.</p>
    </div>
    <nav><ul className={styles.description__ul}>
        <li><i class="fab fa-facebook"></i><a href="https://www.facebook.com/groups/262191725221158">Facebook</a>
        </li>
        <li><i class="fab fa-twitter"></i><a href="https://twitter.com">Twitter</a>
        </li>
        <li><i class="fab fa-instagram"></i><a href="https://instagram.com">Instagram</a>
        </li>
    </ul></nav>
    <ul>
    <li><i class="far fa-fish"></i><Link to="/">About</Link></li>
    <li><i class="far fa-fish"></i><Link to="/">Contacts</Link></li>
    
</ul>
</footer>
    )
};
export default Footer; 