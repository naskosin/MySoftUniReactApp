import styles from './PageNotFound.module.css';

const PageNotFound = ()=>{
      return (
 <>
      <div className={styles.mainbox}>
          <div className={styles.err}>4</div>
          <div className={styles.err}>0</div>
          <div className={styles.err2}>4</div>
          <div className={styles.msg}>Ooops! Page Not Found<p>Let's go <a href="#">home</a> and try from there.</p>
          </div>
          </div>
          </>
      );
}

export default PageNotFound;