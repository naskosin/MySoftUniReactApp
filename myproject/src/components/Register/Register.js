import styles from "./Register.module.css";
//import { useHandler } from "../hooks/useAuthValidateHandler";
//const initialState  = { email: "", password: "", rePassword: "", form: true };
//
//import { isNotAuth } from "../hoc/isAuth";
//
//import { useContext } from "react";
//import { AuthContext } from "../contexts/AuthContext";
//import * as gameServices from "../services/gameServices";
//import { notifyContext } from "../contexts/NotifyContext";

const Register = () => {
  //const { login } = useContext(AuthContext);
  //const { errorNotification, notification } = notifyContext();
  //const [error, setError, isFormValid] = useHandler(initialState);
  //let isCorrect = '';
//
  //const onRegister = (e) => {
  //  e.preventDefault();
  //  let formData = new FormData(e.currentTarget);
  //  let email = formData.get("email");
  //  let password = formData.get("password");
  //  let rePassword = formData.get("rePassword");
  //  if (password === rePassword) {
  //    gameServices
  //      .register(email, password)
  //      .then((regData) => {
  //     login(regData);
  //      })
  //      .catch((err) => {
  //        notification(err);
  //      });
  //  } else {
  //      notification("Error rePassword")
  //   
  //  }
  // 
  //};
  return (
    <section id="register-container" className={styles.registercontainer}>
      <div className={styles.registercontainerinfo}>
        <img
          src="./assets/Ryuki-Spearhead-80S.jpeg"
          alt=""
        />

        <form
        
          method="POST"
          className={styles.containertext}
        >
          <h2>Register</h2>
          <p>Register to get ideas and view the latest masterpieces.</p>

          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="ivan_00" name="email" 
          className={styles.input}/>

          
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*****"
            name="password"
        
            className={ styles.input}
          />


          <label for="re-password">Repeat password:</label>
          <input
            type="password"
            id="rePassword"
            placeholder="*****"
            name="rePassword"
    
        
          />


          <button  className= {styles.button} >Register</button>
          <div className={styles.cardnoaccount}>
            <p>
              Already have an account?<a href="/login">Sign in</a> 
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register ;
