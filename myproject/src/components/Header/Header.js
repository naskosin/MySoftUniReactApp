import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
//import {Link} from 'react-router-dom';
//import { notifyContext } from '../contexts/NotifyContext';
//import { authContext } from '../contexts/AuthContext';
const Header =(

)=>{

//const {userInfo, login, logout} = authContext();
//const {errorNotification, notification } = notifyContext();
//const logOut = () =>{
//logout();
//}
    




    return (<header className={styles.header}>
    <h1>Best trout baits</h1>
    <nav  id={styles.not__logged}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      </ul>
  </nav>;
   
  </header>
  )
};
export default Header;