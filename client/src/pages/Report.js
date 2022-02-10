import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import NavAfter from '../components/NavAfter'
import axios from 'axios'

function Report(props) {
    const [bugDetails,setBugDetails]=useState(
        {
            "product": "sampleBugs",
            "description": "Chrome crashes when i ask it to download a burger",
            "_id": "608e18829950463dd404ca27",
            "name": "Bug42 Mozilla error",
            "author": "Jesus",
            "date": "2021-05-02T03:12:02.547Z",
            "__v": 0
            }
    )

    useEffect(()=>{
    axios.get('http://localhost:4000/api/bugs/'+props.location.id)
    .then(response => {console.log(response)
      setBugDetails(response.data)});},[])
    return (
        <div>
            <NavAfter/>
            <br/>
            <br/>
            <br/>
            {/* <h1>{props.location.id}</h1> */}
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bug Report</h1>
          <div class="container items-center px-5 py-12 lg:px-20 mx-auto">
            <div class="flex flex-wrap ">
              <div class="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl lg:w-1/4">
                <div class="p-6">
                  <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> {bugDetails.name}</h2>
                  <h4 class="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">{bugDetails.product}</h4>
                  <p class="mb-3 text-base leading-relaxed text-gray-500"> {bugDetails.description} </p>
                  <p></p>
                  <div class="flex flex-wrap justify-between">
                  <Link to='./bugs'>
                    <button class="w-full px-10 py-2 mx-auto my-2 text-base font-medium text-gray-600 transition duration-500 ease-in-out transform rounded-md border-gray-50 bg-gray-50 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-100"> Back </button>
                    </Link>
                    {/* <button class="w-full px-16 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-900"> Button </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    );
}

export default Report;