import React from 'react';
import { Link} from 'react-router-dom';

function Nav(props) {
    return (
        <div>

         <div class="text-gray-700 bg-white border-t border-b ">
                    <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
                        <a href="./index.html" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                            <div class="inline-flex items-center">
                                <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
                                </div>
                                <h2
                                    class="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                                    BugVITa
                                </h2>
                            </div>
                        </a>
                        <nav class="flex flex-wrap items-center justify-center text-base ">
                            {/* <a href="#"
                                class="mr-5 text-sm font-semibold text-gray-600 lg:ml-24 hover:text-gray-800">Pricing</a>
                            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Contact</a>
                            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Services</a>
                            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Now</a> */}
                        </nav>
                        <div class="flex ml-auto">
                            <Link to='./login'><button
                                class="items-center px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-900 focus:ring focus:outline-none">Login</button></Link>
                            <Link to='./signup'><button
                                class="items-center px-8 py-2 mt-4 ml-5 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-black0 hover:bg-black hover:text-white focus:ring focus:outline-none">Sign Up
                                <svg class="hidden lg:block" fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button></Link>
                        </div>
                    </div>
                </div>
               

              
                   

              
        </div>
    );
}

export default Nav;