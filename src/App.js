
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {
  const pageSize=6;
  const country='in';
  const [progress, setProgress] = useState(0);
  // api key which will be coming from .env file 
  const apiKey=process.env.REACT_APP_API_KEY 
    return (
        <Router>
          <div>
            <Navbar/>
              <LoadingBar height={3} color='#0072ff' progress={progress}/>
              <Routes>
                
                <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general'/>} />

                <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='general'/>} />

                <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category='business'/>} />

                <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category='entertainment'/>} />

                <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='health'/>} />

                <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category='science'/>} />

                <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='sports'/>} />

                <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='technology'/>} />

              </Routes>
          </div>
        </Router>
    )
}

