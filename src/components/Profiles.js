import React from 'react';
import { Link } from 'react-router-dom';


const Profiles =(props) =>{
    console.log(props);
    return(
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}> Navigate to Posts</Link>
        </div>
    )
}

export default Profiles