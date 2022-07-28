import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import * as authService from '../../services/authService';
//import { notifyContext } from '../contexts/NotifyContext';
import {AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
const Header =(

)=>{

const {userInfo, logout} =useContext(AuthContext);
let token = userInfo.accessToken;
//const {errorNotification, notification } = notifyContext();
const logOut = () =>{
  authService.loginOut(token);
  logout();

}
let loggedNavigation =  
  
<nav className={styles.isLogged}>
 <p className={styles.username} >Hi, {userInfo.email}!</p> 
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/gallery">Gallery</Link>
  </li>
  <li>
    <Link to="/create">Post bait</Link>
  </li>
  <li>
  
  < a href ="/#" onClick = {logOut}>Logout</a>
  </li>
  <li>
    <Link to="/biggestfishes">Biggest Fishes</Link>
  </li>
  {/* <li><Link to="search">Search</Link></li> */}
  {/* <li> */}
    {/* <Link to="/mycatches">My catches</Link> */}
  {/* </li> */}
</ul>


</nav> 

 let guestNavigation = 
 <nav  id={styles.not__logged}>
 <ul>
   <li>
     <Link to="/">Home</Link>
   </li>

   <li> <Link  to="/register">Register</Link></li>
   <li>
   <Link  to="/login">Login</Link>
   </li>
   <li>
   <Link  to="/gallery">Gallery</Link>
   </li>
{/*  */}
   {/* <li> */}
     {/* <Link to="/gallery/catch/topFive">Top 5</Link> */}
   {/* </li> */}
 </ul>
</nav>;




    return (<header className={styles.header}>
    <h1>Best trout baits</h1>
    {userInfo.email ? loggedNavigation : guestNavigation}
  
    
     
    {/* {errorNotification ? <p className={styles.notification} >{errorNotification} </p> : ''}  */}
   
  </header>
  )
};
export default Header;