
import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../firebase"
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
  
const RegistrationForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const navigate = useNavigate('');

  const signUp = (e) => {

    e.preventDefault()
    document.getElementById('passworderror').innerHTML = ""
    document.getElementById('fnameerror').innerHTML = ""
    document.getElementById('lnameerror').innerHTML = ""
    document.getElementById('emailerror').innerHTML = ""

    // check if first name is not empty, if empty it exits the function
    if (fName.length == 0) {
      document.getElementById('fnameerror').innerHTML += "Must not be empty" 
      return
    }

    // check if last name is not empty, if empty it exits the function
    if (lName.length == 0) {
      document.getElementById('lnameerror').innerHTML += "Must not be empty" 
      return
    }
    
    // check email length is not empty
    if (email.length == 0) {
      document.getElementById('emailerror').innerHTML += "Must not be empty" 
      return
    }

    // using hexillion regEx to validate email
    let regEx = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if(!email.match(regEx)) {
      document.getElementById('emailerror').innerHTML += "Invalid Email" 
      return
    }

    // check password length is longer than or equal to 8
    if (password.length < 8) {
      document.getElementById('passworderror').innerHTML += "<li>Must be longer than or equal to 8 characters</li>" 
      return
    }

    // variables to count uppercase characters, lowercase characters, numbers and special characters in the password.
    let countUppercase = 0
    let countLowercase = 0
    let countNumber = 0
    let countSpecialcharacters = 0

    for (let i = 0; i < password.length; i++) {
      //array that containes special characters, can be accessed by using the index of the array.
      const specialC = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','<','>',]

      if (specialC.includes(password[i])) {
        countSpecialcharacters++
      } else if (!isNaN(password[i] * 1)) {
        countNumber++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUppercase++
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowercase++
        }
      }
    }

    //if any of the requirements above are not met, it will end the function and return an error
    if (countLowercase == 0) {
      document.getElementById('passworderror').innerHTML += "<li>Must contain atleast one lowercase character</li>" 
      return
    }
    if (countUppercase == 0) {
      document.getElementById('passworderror').innerHTML += "<li>Must contain atleast one uppercase character</li>"
      return
    }
    if (countNumber == 0) {
      document.getElementById('passworderror').innerHTML += "<li>Must contain atleast one number</li>"
      return
    }
    if (countSpecialcharacters == 0) {
      document.getElementById('passworderror').innerHTML += "<li>Must contain atleast one special character</li>"

      return
    }

    document.getElementById('succesfulReg').innerHTML += "Successfully registered"

    //using firebase to create a user using email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

     //using firebase functions to add users data in database
      await setDoc(
        doc(db, 'users', userCredential.user.uid), 
        {email, fName, lName},
      );

      //function to sign out, as firebase automatically sign in users after registering
      auth.signOut();
      navigate("/signin");
      
     
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message
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
                <span className="text-primary" >for your business</span>
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
                <h3 className="text-primary fw-bold text-center mb-4">Sign up to the website</h3>
                <h4 id="succesfulReg" className="text-success font-weight-light text-center mb-4"></h4>
                  <form onSubmit={signUp}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" value={fName} onChange = {(e)=> setFname(e.target.value)}/>
                          <label className="form-label font-weight-bold" htmlFor="form3Example1">First name</label>
                          <div className ="font-weight-light" id="fnameerror"></div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" value={lName} onChange = {(e)=> setLname(e.target.value)}/>
                          <label className="form-label font-weight-bold" htmlFor="form3Example2">Last name</label>
                          <div className ="font-weight-light" id="lnameerror"></div>
                        </div>
                      </div>
                    </div>
    
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" value={email} onChange = {(e)=> setEmail(e.target.value)} />
                      <label className="form-label font-weight-bold" htmlFor="form3Example3">Email address</label>
                      <div className ="font-weight-light" id="emailerror"></div>
                    </div>
    

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" data-toggle="tooltip" data-html="true" data-placement="top" title="<ul><li>Must contain atleast one uppercase letter</li><li>Must contain atleast one lowercase letter</li><li>Must contain atleast one number</li><li>Must contain atleast one special character</li></ul>" value={password} onChange = {(e)=> setPassword(e.target.value)} />
                      <label className="form-label font-weight-bold" htmlFor="form3Example4">Password</label>
                      <ul className ="font-weight-light" id = "passworderror"></ul>
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