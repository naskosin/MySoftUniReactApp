import { isAuth } from "../../guards/isNotAuth";
import * as baitService from '../../services/baitService';
import styles from './Create.module.css';
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useHandler } from "../../hooks/useCreateEditValidator";
import { useNavigate } from "react-router-dom";
const initialState = { species: "", weight: "", bait: "", img: "", story: "" };

const Create = () =>{
    const {userInfo} = useAuthContext();
    const [error, setError, isFormValid] = useHandler(initialState);
    let navigate = useNavigate();
    console.log(error.species)

    console.log(userInfo)
    
const create=(e)=>{
    
    
    e.preventDefault();
 
    const token = userInfo.accessToken;
    console.log(token)
const {species, bait, img, story, weight} = Object.fromEntries(new FormData(e.currentTarget));
let petData = {species, bait, img, story, weight}
console.log(petData)
baitService.createOne(token, petData)

.then(data=>{console.log(data)
    navigate('/gallery/0e68a98c-3d56-4d3d-9d9f-256ae02a41b8')})

}

    return (
        <div className={styles.createcontainerinfo}>
   
    <img src="/assets/01-azores-fishing.jpg" alt="image"/>

    <form  className={styles.containertext} onSubmit = {create} >

        <h2>Create Catch</h2>
        <p className={styles.paragraph}>Add your fish of lifetime!</p>

        <label htmlFor="title">Species:</label>
        <input type="text"  id="title" placeholder="Trout" name="species" onBlur = {setError} 
         className={error.species && error.species !== "Filled" ? styles.inputerror : styles.input}
           />
{error.species && error.species !== "Filled" ? <p className={styles.errorParagraph}>{error.species}</p> : ""}
        

        <label htmlFor="painting-tech">Bait:</label>
        <input type="text"  id="painting-tech" placeholder="Lure" name="bait"  onBlur = {setError}
         className={error.bait && error.bait!== "Filled" ? styles.inputerror : styles.input}/>
        {error.bait && error.bait!== "Filled"? <p className={styles.errorParagraph}>{error.bait}</p> : ""}

    

        <label htmlFor="picture">Fish picture:</label>
        <input type="text"  id="picture" placeholder="http://..." name="img" onBlur = {setError} 
        className={error.img && error.img !== "Filled" ? styles.inputerror : styles.input}/>

        {error.img  && error.img !== "Filled" ? <p className={styles.errorParagraph}>{error.img}</p> : ""}



        <label htmlFor="certificate">Story:</label>
        <textarea type="text"  placeholder="This day..." id="certificate" rows="5" name="story" onBlur = {setError}
        className={error.story && error.story !== "Filled" ? styles.inputerror : styles.input}
        ></textarea>
        {error.story  && error.story !== "Filled" ? <p className={styles.errorParagraph}>{error.story}</p> : ""}

        


        <label htmlFor="weight">Weight of the fish:</label>
        <input type="text" id="weight" placeholder="1" name="weight"  onBlur = {setError} 
        className={error.weight&& error.weight !== "Filled" ? styles.inputerror : styles.input}
        />
        {error.weight && error.weight !== "Filled"? <p className={styles.errorParagraph}>{error.weight}</p> : ""}

       
        <button disabled={!isFormValid} className={styles.button}>Create</button>


    </form>

</div>

    )
};
export default isAuth(Create);