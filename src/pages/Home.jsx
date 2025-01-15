import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1>Welcome to react Router setup</h1>
        <h3>Required steps and layout</h3>
        <ul>
            <li>
                Add React Router (run :npm i -D react-router-dom)
            </li>
            <li>Folder Structure</li>
            <ul>
                <li>in 'src' folder create folder named 'pages'</li>
                <li>Layout.js</li>
                <li>Home.js</li>
                <li>About.js</li>
            </ul>
        </ul>
        <p>For complete details go to about
        <Link to="/about">About</Link>
        </p>
        </>
    )
  };
  
  export default Home;