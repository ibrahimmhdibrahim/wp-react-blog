import classes from "./posts.module.css";

import Post from "../post/post";
import {useEffect, useState} from "react";

const Posts = () => {

    const [postsData, setPostsData] = useState([]);

    useEffect(
        () => {

            const fetchData = async () => {
                const fetchPosts = await fetch("http://wp-react-blog.test/wp-json/wp/v2/posts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const fetchPostsJson = await fetchPosts.json();
                setPostsData(fetchPostsJson);
                console.log(fetchPostsJson)
            }
            fetchData();
        }, [setPostsData]
    );

    const displayPosts = () => {
        return postsData.map((postData, index) => {
            return <Post key={index} title={postData.title.rendered} date={postData.date} />;
        });
    }

    return (
        <div className={classes.posts}>
            {displayPosts()}
        </div>
    );
}

export default Posts;