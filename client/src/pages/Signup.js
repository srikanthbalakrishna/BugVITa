import React, { useState } from 'react';
import Nav from '../components/Nav'
import axios from 'axios'

function Signup(props) {
    const [user,setUser]=useState()
    const [pass,setPass]=useState()

    function handleUserChange(event){
        setUser(event.target.value);
      }

      function handlePassChange(event){
        setPass(event.target.value);
      }
      
      function handleClick(e){
       e.preventDefault()   
       let reqbody={
        "email":user,
        "password": pass
        }  
        axios.post('http://localhost:4000/api/users/signup', reqbody)
        .then(response => handleResponse(response));
      }

      function handleResponse(res){
          console.log(res)
          if(res.data.signedup)
          window.location.href = "/";
        //   else
        //   window.location.href = "/";
      }

    return (
        <div>
            {/* <Nav/> */}

             <section class="flex flex-col items-center h-screen md:flex-row ">
                    <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
                         <img src="https://dummyimage.com/1000x800/F3F4F7/64748b"
                            alt="" class="object-cover w-full h-full"/>
                    </div>
                    <div class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
                        <div class="w-full h-100">
                            <a class="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0">
                            <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
                            </div>
                            <h2
                                class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlue-500 ">
                                BugVITa
                            </h2>
                            </a>
                            <h1 class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">Sign Up</h1>
                            <form class="mt-6" action="#" method="POST">
                                <div>
                                    <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">Email
                                        Address</label>
                                    <input  name="" id="" placeholder="Your Email " value={user} onChange={(e)=>{handleUserChange(e)}}
                                        class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
                                        autofocus autocomplete required/>
                                </div>
                                <div class="mt-4">
                                    <label class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">Password</label>
                                    <input type="password" name="" id="" placeholder="Your Password" minlength="1" value={pass} onChange={(e)=>{handlePassChange(e)}}
                                        class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
                                        required/>
                                </div>
                                
                                <button onClick={(e)=>{handleClick(e)}} type="submit" class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Submit</button>
                            </form>
                            <p class="mt-8 text-center">Have an account? <a href="./login"
                                    class="font-semibold text-blue-500 hover:text-blue-700">Login</a></p>
                        </div>
                    </div>
                </section>
                
        </div>
    );
}

export default Signup;