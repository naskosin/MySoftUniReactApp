import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import * as authService from '../../services/authService';
import { useNotifyContext } from "../../contexts/NotifyContext";
import {AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
const Header =(

)=>{

const {userInfo, logout} =useContext(AuthContext);
let token = userInfo.accessToken;
const {errorNotification, notification } = useNotifyContext();
const logOut = () =>{
  authService.loginOut(token);
  logout();

}
let loggedNavigation =  
  
<nav className={styles.isLogged}>
 <p className={styles.username} >Hi, {userInfo.email}!</p> 
<ul>
  <li>
    <Link className={styles.header__a} to="/">Home</Link>
  </li>
  <li>
    <Link className={styles.header__a} to="/gallery">Gallery</Link>
  </li>
  <li>
    <Link className={styles.header__a} to="/create">Post bait</Link>
  </li>
  <li>
  
  < a  className={styles.header__a} href ="/#" onClick = {logOut}>Logout</a>
  </li>
  <li>
    <Link  className={styles.header__a} to="/biggestfishes">Biggest Fishes</Link>
  </li>
  {/* <li><Link  className={styles.header__a} to="search">Search</Link></li> */}
  <li>
    <Link  className={styles.header__a} to="/mybaits">My baits</Link>
  </li>
</ul>


</nav> 

 let guestNavigation = 
 <nav  className={styles.not__logged}>
 <ul>
   <li>
     <Link className={styles.header__a} to="/">Home</Link>
   </li>

   <li> <Link  className={styles.header__a} to="/register">Register</Link></li>
   <li>
   <Link className={styles.header__a}  to="/login">Login</Link>
   </li>
   <li>
   <Link  className={styles.header__a} to="/gallery">Gallery</Link>
   </li>
{/*  */}
   {/* <li> */}
     {/* <Link className={styles.header__a} to="/biggestfishes">Top 5</Link> */}
   {/* </li> */}
 </ul>
</nav>;




    return (<header className={styles.header}>
    <h1>Best trout baits</h1>
    {userInfo.email ? loggedNavigation : guestNavigation}
  
    
     
    {errorNotification ? <p className={styles.notification} >{errorNotification} </p> : ''} 
   
  </header>
  )
};
export default Header;