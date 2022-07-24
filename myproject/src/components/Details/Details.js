import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import * as baitService from "../../services/baitService";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [bait, baitState] = useState([]);

  const { userInfo } = useAuthContext();
  const {baitId } = useParams();
  const navigate = useNavigate();

  //let themeId = gameid;
  const token = userInfo.accessToken;

  const email = userInfo.email;

  useEffect(() => {
   
  
    baitService.getOneBait(baitId).then((res) => {
      baitState(res) ; console.log(res);
    });
  }, []);



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
 // //});
 // navigate(0);
 //};

// const deleteArticle = (gameid) => {
//   gameServices.deleteOne(token, themeId).then((data) => console.log(data));
//   navigate("/");
// };
//
// const deleteComment = (id) => {
//   commentServices.deleteOneComment(token, id);
//   navigate(0);
// };

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
     
    </>
  );
};
export default Details;
