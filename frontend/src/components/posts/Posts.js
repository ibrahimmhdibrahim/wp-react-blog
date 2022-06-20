import classes from "./posts.module.css";

import Post from "../post/post";
import {useEffect, useState} from "react";

const Posts = (props) => {

    const [postsData, setPostsData] = useState([]);

    useEffect(
        () => {

            const fetchData = async () => {
                let url = "http://wp-react-blog.test/wp-json/wp/v2/posts?per_page=8";
                if (props.category) url += "&categories=" + props.category;
                const fetchPosts = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const fetchPostsJson = await fetchPosts.json();
                setPostsData(fetchPostsJson);
            }
            fetchData();
        }, [props.category, setPostsData]
    );

    const displayPosts = () => {
        return postsData.map((postData, index) => {
            let imageUrl = postData.formatted_img;
            if (!imageUrl) imageUrl = "https://via.placeholder.com/400";
            return <Post key={index} title={postData.title.rendered} date={postData.formatted_date} image={imageUrl}/>;
        });
    }

    return (
        <div className={classes.posts}>
            {displayPosts()}
        </div>
    );
}

export default Posts;