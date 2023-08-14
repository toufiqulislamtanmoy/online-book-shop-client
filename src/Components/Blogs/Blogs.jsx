import { useEffect, useState } from "react";
import Blog from "./blog";


const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogData.json").then(res => res.json()).then(data => {
            setBlogs(data)
        })
    }, [])
    return (
        <div>
            {
                blogs.map(blog =><Blog key={blog.id} blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;