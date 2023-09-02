import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";

  
const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');


  const loginWeb = (e) => {

    e.preventDefault()
    document.getElementById('passworderror').innerHTML = ""
    document.getElementById('emailerror').innerHTML = ""
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode == "auth/user-not-found") {
        document.getElementById('emailerror').innerHTML = "Email not registered" 
      }
      if (errorCode == "auth/invalid-email") {
        document.getElementById('emailerror').innerHTML = "Email is invalid or empty" 
      }

      if (errorCode == "auth/missing-password") {
        document.getElementById('passworderror').innerHTML = "Password is wrong" 
      }
      if (errorCode == "auth/wrong-password") {
        document.getElementById('passworderror').innerHTML = "Password is wrong" 
      }

      console.log(errorCode);

    });

  }

  return (
    <section className="">

      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Donate your <br />
                <span className="text-primary">Pre-loved books</span>
              </h1>
              <p >
                This website is to manage pre-loved books that has been donated to our library. You can browse books that are available in our library.
              </p>
            </div>
    
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">

                <div className="card-body py-5 px-md-5">
                <h4 className="text-primary fw-bold text-center mb-4">Login to your account</h4>

                  <form onSubmit={loginWeb}>
    
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" value={email} onChange = {(e)=> setEmail(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                      <div className ="font-weight-light" id="emailerror"></div>
                    </div>
    

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <div className ="font-weight-light" id = "passworderror"></div>
                    </div>
    
    

                    <button type="submit" id ="button1" className="btn btn-primary btn-block mb-4">
                      Log In
                    </button>
    


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};
  
export default LogIn;