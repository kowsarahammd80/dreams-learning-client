import React from 'react';
import NavBar from '../shared/navBar/NavBar';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <NavBar />
     
     <div className=' mx-auto text-center'>
       <div>
       <h2>Latest Blogs</h2>
       <p>Many blogs provide commentary on a particular subject or topic, ranging from philosophy, religion, and arts to science, politics, and sports.</p>
       </div>
     </div>

      <div className='container mb-3 mt-5'>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card blogs">

              <div class="card-body">
                <h5 class="card-title text-danger"> What is cors? </h5>
                <p class="card-text"> <span className='fw-bold'>Cross-Origin Resource Sharing</span> (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card blogs">

              <div class="card-body ">
                <h5 class="card-title text-danger"> Why are you using firebase?</h5>
                <p class="card-text"> <span className='fw-bold'>Google Firebase</span> is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment... reporting and fixing app crashes, creating marketing and product experiment. reporting and fixing app crashes, creating marketing and product experiment</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card blogs">

              <div class="card-body">
                <h5 class="card-title text-danger ">What other options do you have to implement authentication?</h5>
                <p class="card-text"> <span className='fw-bold'>Authentication</span>  is used by a server when the server needs to know exactly who is accessing their information or site.
                  Authentication is used by a client when the client needs to know that the server is system it claims to be.
                  In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card blogs">

              <div class="card-body">
                <h5 class="card-title text-danger"> How does the private route work?</h5>
                <p class="card-text"> <span className='fw-bold'>private route</span> component with React Router 6. The private route component is used to protect selected pages in a React app from unauthenticated users.The below code snippets are from a React + Redux JWT authentication tutorial I posted recently that includes a live demo, so to see the code running check out.  so to see the code running check out. so to see the code running check out. so to see the code running check out so to see the code running check out so to see the code running check out so to see the code running check out</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card blogs">

              <div class="card-body">
                <h5 class="card-title text-danger">What is Node?</h5>
                <p class="card-text"> <span className='fw-bold'>Node.js</span> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser,  which was designed to build scalable network applications  Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.  which was designed to build scalable network applications  which was designed to build scalable network applications  which was designed to build scalable network applications</p>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card blogs">

              <div class="card-body">
                <h5 class="card-title text-danger">How does Node work?</h5>
                <p class="card-text"> <span className='fw-bold'> Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;