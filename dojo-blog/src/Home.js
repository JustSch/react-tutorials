import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {    
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'i\'m pomu', author: 'pomu', id: 1 },
        { title: 'Welcome party!', body: 'i\'m pomu', author: 'elira', id: 2 },
        { title: 'Web dev top tips', body: 'HAHAHAHAHAHAHA', author: 'selen', id: 3 }
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('im pomu');
        console.log(blogs);
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;