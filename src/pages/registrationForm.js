
import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
  
const RegistrationForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const navigate = useNavigate('');

  const signUp = (e) => {

    e.preventDefault()
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("/signin");
     
    })
    .catch((error) => {
      console.log(error);
    });

  }



  return (
    <section className="">

      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
    
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                <h4 className="text-primary fw-bold text-center mb-4">Sign up to the website</h4>
                  <form onSubmit={signUp}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" value={fName} onChange = {(e)=> setFname(e.target.value)}/>
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" value={lName} onChange = {(e)=> setLname(e.target.value)}/>
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>
    
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" value={email} onChange = {(e)=> setEmail(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>
    

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" value={password} onChange = {(e)=> setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
    
    

                    <button type="submit" id ="button1" className="btn btn-primary btn-block mb-4 rounded-pill">
                      Sign up
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
  
export default RegistrationForm;