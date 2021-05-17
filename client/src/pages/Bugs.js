import React, { useState } from 'react';
import NavAfter from '../components/NavAfter'
import axios from 'axios'

function Bugs(props) {
    const[bugs,setBugs]=useState([
        {
            "product": "sampleBugs",
            "description": "IT servers crash when anyone tries to run BugVITa",
            "_id": "608e1d499950463dd404ca28",
            "name": "BugVITa FATAL crash",
            "author": "G Vishwanathan",
            "date": "2021-05-02T03:32:25.089Z",
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
        }
        ]
        )
    const[name,setName]=useState()

    function handleNameChange(event){
        setName(event.target.value);
    }  
    
    axios.get('http://localhost:4000/api/bugs')
    .then(response => setBugs(response.data));
    

    function handleBugSubmit(e){
        e.preventDefault()   
        let reqbody={
            "name":name
         }  
         axios.post('http://localhost:4000/api/bugs', reqbody)
         .then(response => handleBugAdd(response));
     }

    function handleBugAdd(res){
        console.log(res)
        axios.get('http://localhost:4000/api/bugs')
    .then(response => setBugs(response.data));
    } 

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
                        <a class="text-indigo-500 inline-flex items-center mt-4">View Bugs
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
        )
    }

    return (
        <div>
            <NavAfter/>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Bugs</h1>
      <p class="lg:w-1/3 mx-auto leading-relaxed text-base">Enter product name and click Submit to add new product</p>
    </div>
    <div class="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Product Name</label>
        <input type="text" value={name} onChange={(e)=>{handleNameChange(e)}} id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={(e)=>{handleBugSubmit(e)}} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    </div>
  </div>
</section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    
                    <div class="-my-8 divide-y-2 divide-gray-100">
                    {bugs?bugs.map(bugsRender):<></>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Bugs;