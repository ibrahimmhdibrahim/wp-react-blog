import classes from "./post.module.css";

const Post = (props) => {
    return (
        <article className={classes.post}>
            <img className={classes.postImage} src={props.image} alt="article" />
            <h3 className={classes.postTitle}>{props.title}</h3>
            <time className={classes.postDate}>{props.date}</time>
        </article>
    );
}

export default Post;