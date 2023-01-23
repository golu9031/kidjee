import React from "react";
import {Link} from 'react-router-dom';
const Nav = () => {
    
    return(
        <div>
            <ul>
            
                <li><Link to ="/studentid">Student Id</Link></li>
                <li><Link to ="/addstudent">AddStudent</Link></li>
                <li><Link to ="/result">Result</Link></li>
                
                <li><Link to ="/books">Books</Link></li>
                <li><Link to ="/logout">Logout</Link></li>
                
                
            </ul>
         
        </div>
    )
};
export default Nav;