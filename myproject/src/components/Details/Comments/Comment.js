import { useAuthContext } from "../../../contexts/AuthContext";
import {  useState } from "react";
import * as commentService from "../../../services/commentService";
import { useNavigate } from "react-router-dom";


import styles from "./Comments.module.css";

export const Comment = ({ commentText, baitId}) => {
    
  const navigate = useNavigate();

  const { userInfo } = useAuthContext();
  const token = userInfo.accessToken;
  console.log(token)
  const email = userInfo.email;
  const [editMode, setMode] = useState(false);
  const edit = () => {
    setMode(true);

  };
  const editComment = (e) => {
    e.preventDefault();
    console.log(commentText._id)
   let { comment } = Object.fromEntries(new FormData(e.currentTarget));
    let text = { comment, email, baitId };
    console.log(comment)
   commentService.editOneComment(token, text, commentText._id)
   .then((data) => {
     console.log(data)
     
     });
     
   navigate(0);
  }
 
 
 
 
 
 const deleteComment = () => {
   console.log("deleted")
   console.log(commentText._id)

   commentService.deleteOneComment(token, commentText._id);
   navigate(0);
 };
 


const cancelEdit =() =>{
    setMode(false);
}
  let viewMode = 
    (<div>
        <div className={styles.comment__text}>
          <p>{commentText.comment}</p>
        </div>

        {userInfo.email === commentText.email ? 
          <div className={styles.comments__buttons}>
            <button className={styles.comments__buttons__delete} onClick={deleteComment}>Delete</button>
            <button className={styles.comments__buttons__edit} onClick={edit} id={commentText._id}>
              Edit
            </button>
          </div>: ""}</div>) ;
     
    

let editView =
(<form className={styles.edit__mode} onSubmit={editComment} >
  <textarea 
    type="text"

    placeholder="This day"
    name="comment"
    defaultValue={commentText.comment}
  ></textarea>

  <div className={styles.comments__buttons__edit__mode}>
    <button className={styles.comments__buttons__edit__mode__save} >
      Save
    </button>
    <button className={styles.comments__buttons__edit__mode__cancel} onClick ={cancelEdit}>
      Cancel
    </button>
  </div>
</form>);




  return (
    <div className={styles.comments} >
        <div className={styles.comment}>
      <p className={styles.comment__user}>
        User: <span>{commentText.email}</span>, commented
      </p>
      
      {editMode ? 
        editView
       : 
        viewMode
      }
      
    </div>
    </div>
  );
};
export default Comment;