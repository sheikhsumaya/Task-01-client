import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className=" items-center text-center">
      <h1 className="mb-10 text-4xl font-bold text-center mt-5">Welcome About Tasks</h1>

     {/* <div className="mb-10">
     <label for="my-modal-3" class="btn btn-primary modal-button">
       GET STARTED
      </label>
     <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="hero bg-blue-200">
            <div class="hero-content flex-col">
              <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      class="input input-bordered"
                    />
                    <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div> */}
    <div className=" mb-80">
    <Link className="text-primary" to="/todo">Add New Tasks</Link>
    </div>
    </div>
  );
};

export default Home;
