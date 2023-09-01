
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {auth, db} from "../firebase"
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import {doc, getFirestore, collection, query, where, getDoc } from "firebase/firestore";
import image1 from "../30797.jpg"
  
const Home = () => {
  const [userid,setUid] = useState('')
  const [userdata,setData] = useState([])
  const auth = getAuth();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      document.getElementById('innerAuth').innerHTML = '';
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  
  return (
    <section className="">

      <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
        <div className="container" >
          <div className="row gx-lg-5 align-items-center"id="container1">
            <div className="col-7 mb-5 mb-lg-0" id="container1">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Donate your <br />
                <span className="text-primary">Pre-loved books</span>
              </h1>
              <p >
                This website is to manage pre-loved books that has been donated to our library. You can browse books that are available in our library.
              </p>
              <div id="innerAuth" className="row align-items-center pt-2" >
                <div className='col-6 col-lg-2'>
                  <Link className='btn btn-primary rounded-pill' id='button12' to='/signup'><>Sign Up</></Link>
                </div>
                <div className='col-6 col-lg-2'>
                  <Link className='btn btn-primary rounded-pill' id='button22' to='/signin'><>Log In</></Link>
                </div>

              </div>

            </div>
    
            <div className="col-5 mb-5 mb-lg-0" id="container1">
              <img src={image1} id="imageSizing">
              </img>

            </div>
          </div>
        </div>
      </div>

    </section>
   
  );
};
  
export default Home;