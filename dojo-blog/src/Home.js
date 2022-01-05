import { useState } from "react";

const Home = () => {
    //let name = 'pomu';
    const [name, setName] = useState('pomu');
    const [age, setAge] = useState(8000);

    const handleClick = () => {
        setName('elira');
        setAge(10000);
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;