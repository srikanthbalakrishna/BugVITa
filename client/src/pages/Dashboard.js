import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import NavAfter from '../components/NavAfter'
import axios from 'axios'

function Dashboard(props) {
    const[products,setProducts]=useState([
        {
            "_id": "6095d5c75f46d007d08cd5a6",
            "name": "sampleBugs",
            "__v": 0
        },
        {
            "_id": "6095d5cd5f46d007d08cd5a7",
            "name": "BugVITa",
            "__v": 0
        },
        {
            "_id": "6095d6025f46d007d08cd5a8",
            "name": "Apple",
            "__v": 0
        }
      ])
    const[name,setName]=useState()

    function handleNameChange(event){
        setName(event.target.value);
    }  
    useEffect(()=>{axios.get('http://localhost:4000/api/products')
    .then(response => {console.log(response)
        setProducts(response.data)});},[])
    
    

    function handleProdSubmit(e){
        e.preventDefault()   
        let reqbody={
            "name":name
         }  
         axios.post('http://localhost:4000/api/products', reqbody)
         .then(response => {console.log(response)
            handleProdAdd(response)});
     }

    function handleProdAdd(res){
        console.log(res)
        axios.get('http://localhost:4000/api/products')
    .then(response => setProducts(response.data));
    } 

    function productsRender(obj){
        return(
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                        <span class="mt-1 text-gray-500 text-sm">Product</span>
                        </div>
                        <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{obj.name}</h2>
                        {/* <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p> */}
                        
                        <Link to={{pathname: '/buglist',name:obj.name}}>
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
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Products</h1>
      <p class="lg:w-1/3 mx-auto leading-relaxed text-base">Enter product name and click Submit to add new product</p>
    </div>
    <div class="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Product Name</label>
        <input type="text" value={name} onChange={(e)=>{handleNameChange(e)}} id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={(e)=>{handleProdSubmit(e)}} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    </div>
  </div>
</section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    
                    <div class="-my-8 divide-y-2 divide-gray-100">
                    {products?products.map(productsRender):<></>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;