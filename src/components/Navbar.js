import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    const links = props.topics.map((topic, index) => 
        <li key={index}>
            <Link to={'/rea-app/topic/' + (index + 1)}>
                {topic.title}
            </Link>
        </li>        
    );

    return(
        <ul id="pages">
            {links}
        </ul>
    );
    
}

export default Navbar;