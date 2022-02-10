import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
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
    const[author,setAuthor]=useState()
    const[product,setProduct]=useState()
    const[desc,setDesc]=useState()

    function handleNameChange(event){
        setName(event.target.value);
    }  
    function handleProductChange(event){
        setProduct(event.target.value);
    }  
    function handleAuthorChange(event){
        setAuthor(event.target.value);
    }  
    function handleDescChange(event){
        setDesc(event.target.value);
    }  
    
    useEffect(()=>{axios.get('http://localhost:4000/api/bugs')
    .then(response => {console.log(response)
        setBugs(response.data)});},[])
    

    function handleBugSubmit(e){
        e.preventDefault()   
        let reqbody={ "name":name, "author":author, "product":product, "description":desc }
  
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
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bug Reports</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Enter bug details and click Submit to add new bug report</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                     <div class="flex flex-wrap -m-2">
                     <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text"  name="email" value={name} onChange={(e)=>{handleNameChange(e)}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">Author</label>
                            <input type="text"  name="name" value={author} onChange={(e)=>{handleAuthorChange(e)}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-600">Product</label>
                            <input type="text"  name="email" value={product} onChange={(e)=>{handleProductChange(e)}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
                            <input type="text" name="email" value={desc} onChange={(e)=>{handleDescChange(e)}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div class="p-2 w-full">
                        <button onClick={handleBugSubmit} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>
                     </div>
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