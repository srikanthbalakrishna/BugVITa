import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    axios
      .get("http://localhost:4000/api/users/login/" + user + "-" + pass)
      .then((response) => handleResponse(response))
      .catch((error) => {
        console.log(`An error occurred: ${JSON.stringify(error)}`);
      });
  }

  function handleResponse(res) {
    console.log(res);
    //Use DOM object to redirect to new page
    if (res.data.loggedin) window.location.href = "/dashboard";
    else window.location.href = "/";
  }
  return (
    <div>
      {/* <Nav/> */}

      <section class="flex flex-col items-center h-screen md:flex-row ">
        <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
          <div class="w-full h-100">
            <a class="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0">
              <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlue-500 ">
                BugVITa
              </h2>
            </a>
            <h1 class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">
              Log in to your account
            </h1>
            <form class="mt-6" action="#" method="POST">
              <div>
                <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">
                  Email Address
                </label>
                <input
                  name=""
                  id=""
                  placeholder="Your Email "
                  value={user}
                  onChange={(e) => {
                    handleUserChange(e);
                  }}
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
                  autofocus
                  autocomplete
                  required
                />
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Your Password"
                  minlength="1"
                  value={pass}
                  onChange={(e) => {
                    handlePassChange(e);
                  }}
                  class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
                  required
                />
              </div>

              <button
                type="submit"
                onClick={(e) => {
                  handleClick(e);
                }}
                class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
              >
                Submit
              </button>
            </form>
            <p class="mt-8 text-center">
              Need an account?{" "}
              <a
                href="./signup"
                class="font-semibold text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
