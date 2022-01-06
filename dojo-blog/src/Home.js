import { useState } from "react";

const Home = () => {    
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'i\'m pomu', author: 'pomu', id: 1 },
        { title: 'Welcome party!', body: 'i\'m pomu', author: 'elira', id: 2 },
        { title: 'Web dev top tips', body: 'HAHAHAHAHAHAHA', author: 'selen', id: 3 }
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;