import React from 'react';
import Nav from'./components/Nav'

function Home(props) {
    return (
        <div>
            <Nav/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <section class="text-gray-700 ">
            <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
              <div class="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
                <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-6xl title-font">BugVITa </h1>
                <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 text-2xl">A repository for all bug reports. </p>
                <p class="flex items-center mb-2 text-indigo-500 text-xl "><span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span> Improves Efficiency</p>
                <p class="flex items-center mb-2 text-indigo-500 text-xl ">
                  <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span> Easy to Use
                </p>
                <p class="flex items-center mb-6 text-indigo-500 text-xl">
                  <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span> Well Organized
                </p>
              </div>
              <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                <img class="object-cover object-center rounded-lg " alt="hero" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"/>
              </div>
            </div>
          </section>
        
        </div>
    );
}

export default Home;