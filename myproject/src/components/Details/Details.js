import { Link } from "react-router-dom";
import { isAuth } from "../../guards/isAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import * as baitService from "../../services/baitService";
import * as commentService from "../../services/commentService";
import Comment  from "../Comments/Comment";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [bait, setBait] = useState([]);
  const [comments, commentsState] = useState([]);
  const { userInfo } = useAuthContext();
  const {baitId } = useParams();
  const navigate = useNavigate();

  //let themeId = gameid;
  const token = userInfo.accessToken;

  const email = userInfo.email;


  useEffect(() => {
    commentService.getAllComments().then((res) => {
      let data = res.filter((x) => baitId === x.themeId);
      commentsState(data);
    });
    baitService.getOneBait(baitId ).then((res) => {
      setBait(res);
    });
  }, []);

  const createYourComment = (e) => {
    e.preventDefault();
    let { comment } = Object.fromEntries(new FormData(e.currentTarget));

    let text = { comment, email, baitId };
    commentService
      .createComment(token, text)
      .then((res) => commentsState((state) => [...state, res]));
      e.target.reset();
  };


 // const editComment = (e, id) => {
 //   e.preventDefault();
 //   let { comment } = Object.fromEntries(new FormData(e.currentTarget));
 //   let text = { comment, email, themeId };
 //   commentServices.editOneComment(token, text, id)
   //.then((data) => {
   //  console.log(data.comment)
   //  let arr = comments;
   //  arr.map((x) => {
   //    if (x._id === id) {
   //      console.log(x._id);
   //      console.log({x});
   //      return x.comment= data.comment ;
   //    }
   //    return x;
   //  });
   //  console.log(comments)
   //  commentsState(arr);
   //  console.log(comments)
   //  
   //
   //});
 // navigate(0);
 //}



// const deleteArticle = (gameid) => {
//   gameServices.deleteOneBait(token, themeId).then((data) => console.log(data));
//   navigate("/");
// };
//
//const deleteComment = (id) => {
//  commentServices.deleteOneComment(token, id);
//  navigate(0);
//};

  return (
    <>
      <section className={styles.sectionmain}>
        <article className={styles.main}>
          <div className={styles.mainimgwrapper}>
            <img src={bait.img} className={styles.mainimg} alt="No picture" />
          </div>
          <div className={styles.detailsdiv}>
            <p>
              <span>Fish species: </span> {bait.species}{" "}
            </p>
            <p>
              <span className={styles.span}>Bait: </span> {bait.bait}
            </p>
            <p>
              {" "}
              <span>The story: </span>
              {bait.story}
            </p>

            <p>
              <span>Weight: </span>
              {bait.weight}kg.
            </p>
            {userInfo._id === bait._ownerId ? (
              <div>
                <button className={styles.delete}>
                  <Link to={`/gallery/edit/${bait._id}`}>Edit article</Link>
                </button>
                <button className={styles.edit} >
                  Delete article
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </article>
      </section>
     
      {comments.length > 0 ? (
        <section>
          {comments.map((x) => (
            <Comment
              key={x._id}
              comment={x}
              // editComment={(e) => editComment(e, x._id)}
              // deleteComment={() => deleteComment(x._id)}
            />
          ))}
        </section>
      ) : (
        <div className={styles.no__comments}>
          <p className={styles.no__comments}>No comments yet!</p>
        </div>
      )}

      <div className={styles.container}>
        <form className={styles.form__container} onSubmit={createYourComment}>
          <h2>Comment</h2>

          <textarea
            type="text"
            id="uses"
            placeholder="This day"
            name="comment"
          ></textarea>

          <button>Comment</button>
        </form>
      </div>
    </>
  );
};
export default isAuth(Details);
