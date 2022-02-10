import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import NavAfter from '../components/NavAfter'
import axios from 'axios'

function Buglist(props) {
    const [bugDetails,setBugDetails]=useState([
        {
            "product": "sampleBugs",
            "description": "Chrome crashes when i ask it to download a burger",
            "_id": "608e18829950463dd404ca27",
            "name": "Bug42 Mozilla error",
            "author": "Jesus",
            "date": "2021-05-02T03:12:02.547Z",
            "__v": 0
            },
        {
            "product": "sampleBugs",
            "description": "Chrome crashes when i ask it to download a burger",
            "_id": "608e18829950463dd404ca27",
            "name": "Bug42 Mozilla error",
            "author": "Jesus",
            "date": "2021-05-02T03:12:02.547Z",
            "__v": 0
            }]
    )
    useEffect(()=>{
    axios.get('http://localhost:4000/api/products/'+props.location.name)
    .then(response => {console.log(response)
        setBugDetails(response.data)});},[])
    
    
        function bugsRender(obj){
        
          return(
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                          <span class="mt-1 text-gray-500 text-sm">Bug</span>
                          </div>
                          <div class="md:flex-grow">
                          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{obj.name}</h2>
                          <p class="leading-relaxed">{obj.description}</p>
                          <Link to={{pathname: '/report',id:obj._id}}> 
                          <a class="text-indigo-500 inline-flex items-center mt-4">View Bugs
                              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                              </svg>
                          </a></Link>
                          </div>
                      </div>
          )
      }
    return (
        <div>
            <NavAfter/>
            <br/>
            <br/>
            <br/>
            {/* <h1>{props.location.id}</h1> */}
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bug List</h1>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    
                    <div class="-my-8 divide-y-2 divide-gray-100">
                    {bugDetails? bugDetails.map(bugsRender):<></>}
                    </div>
                </div>
            </section>
        
        </div>
    );
}

export default Buglist;