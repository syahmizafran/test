import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import {auth} from "../firebase"
import { signOut, onAuthStateChanged } from "firebase/auth";

const Authentication = () => {
    const [authentication,setAuthentication] = useState("");

    useEffect(() =>{
        const checkAuth = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthentication(user);
            }else{
                setAuthentication(null);
            }
        })
        return () => {
            checkAuth();
        }

    }, [])

    const userSignout = () => {
        signOut(auth).then(()=>{
            console.log("user signed out")
        }).catch(error=> console.log("error"))
    }
    
    return(

        <> 
            {authentication === null ?
            
            <>
            <li className="nav-item">
                <Link id = "button"className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
                <Link id = "button" className="nav-link" to="/signin">Log In</Link>
            </li>
            </>:
            <>
            <li className="nav-item">
                <Link id = "button" onClick = {userSignout} className="nav-link" to="/">Sign Out</Link>
            </li>
            </>
            
            } 
        </>

    );
};

export default Authentication;