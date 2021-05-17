import React from 'react';
import { Link} from 'react-router-dom';

function NavAfter(props) {
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
                            <a href="./dashboard"
                                class="mr-5 text-sm font-semibold text-gray-600 lg:ml-24 hover:text-gray-800">Products</a>
                            <a href="./bugs" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Bugs</a>
                            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Services</a>
                            <a href="#" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Now</a>
                        </nav>
                        
                    </div>
                </div>
               

              
                   

              
        </div>
    );
}

export default NavAfter;