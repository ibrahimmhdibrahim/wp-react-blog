import classes from "./posts.module.css";

import Post from "../post/post";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;