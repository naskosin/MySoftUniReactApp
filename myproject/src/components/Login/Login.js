import styles from "./Login.module.css";
import * as authService from '../services/authService'
//import { notifyContext } from "../contexts/NotifyContext";
//const initialState  = { email: "", password: "", rePassword: "Filled" };
//import { authContext } from "../contexts/AuthContext";
//import * as gameServices from "../services/gameServices";
//import { useHandler } from "../hooks/useAuthValidateHandler";
//import { useNavigate } from "react-router-dom";
//import { isNotAuth } from "../hoc/isAuth";



const Login = () => {
// const { userInfo, login } = authContext();
// const {errorNotification, notification } = notifyContext();
//
//
//onst [error, setError,  isFormValid] = useHandler(initialState);
//
//
//
// const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");

    let password = formData.get("password");
   
    authService.login(email, password)
    .then((authData) => {
      //login(authData);
      console.log(authData);
      //navigate("/");
    })
    .catch((err)=>{ console.log(err);  })

  };
  

  return (
    <section className={styles.logincontainer}>
      
      <div className={styles.container}>
        <img
          src="./assets/3.jpg"
          alt="Loading..."
        />

        <form onSubmit={onLogin} className={styles.containertext}>
       
          <h2>Login</h2>
          <p className={styles.paragraph} >Welcome, see the new masterpieces!</p>

          <label htmlFor="uses">Uses:</label>
          <input
            type="text"
            id="uses"
            placeholder="ivan_00"
            name="email"
           
          />
         

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*****"
            name="password"
   
   
          />
          

          <button  className={styles.button}>
            Login
          </button>
          <div>
            <p className={styles.paragraph}>
              Don't have an account? <a href="/register">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
