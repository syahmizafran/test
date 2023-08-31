
import React from "react";
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <section className="">

      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-6 mb-5 mb-lg-0">
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
              <div className="row align-items-center pt-2">
                <div className="col-2">
                  <Link className="btn btn-primary rounded-pill" id="button" to="/signup">Sign up</Link>
                </div>
                <div className="col-2">
                  <Link className="btn btn-primary rounded-pill" id="button" to="/signin">Log In</Link>
                </div>
              </div>

            </div>
    
            <div className="col-6 mb-5 mb-lg-0">
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
          </div>
        </div>
      </div>

    </section>
   
  );
};
  
export default Home;