import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Nav = () => {
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
    }
    return(
        <div>
            <ul>
            <ul className="nav-ul">
                <li><Link to ="/">School</Link></li>
                <li><Link to ="/home">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact us">Contact Us </Link></li>
                <li><Link to ="/profile">Profile</Link></li>
                
                <li>{ auth ? <Link onClick={logout} to ="/login">Logout</Link> :<Link to ="/login">Login</Link>}</li>
                <li><Link to ="/register">Register</Link></li>
                
            </ul>
           
            </ul>
        </div>
    )
};
export default Nav;