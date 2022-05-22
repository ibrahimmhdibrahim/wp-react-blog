import classes from "./post.module.css";

const Post = () => {
    return (
        <article className={classes.post}>
            <img className={classes.postImage} src="http://via.placeholder.com/400x400" alt="article" />
            <h3 className={classes.postTitle}>My Fancy Article</h3>
            <time className={classes.postDate}>22/5/2022</time>
        </article>
    );
}

export default Post;