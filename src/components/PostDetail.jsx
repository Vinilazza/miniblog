import styles from "./PostDetail.module.css";

import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {


  const dateFormatted = (datePost) => {
    let timestamp = datePost.createdAt.seconds;

    var date = new Date(timestamp * 1000);
    let year = date.getFullYear()
    var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var month = months[date.getMonth()];
    var days = date.getDate()
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return days + "/"+ month +"/"+ year +", "+ hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  }

 


  return (
    <Link to={`/posts/${post.id}`} className={styles.link_name}>
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>
        Autor: {post.createdBy} | {dateFormatted(post)}
      </p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler mais
      </Link>
    </div>  
    </Link>
    
  );
};

export default PostDetail;
