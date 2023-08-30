import React from "react";
  
const LogIn = () => {
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
                <h4 className="text-primary fw-bold text-center mb-4">Login to your account</h4>
                  <form>
    
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>
    

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" for="form3Example4">Password</label>
                    </div>
    
    

                    <button type="submit" className="btn btn-primary btn-block mb-4">
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