// src/App.js
import React from 'react';
import MoveList from './components/MoveList';
import Sidebar from './components/Sidebar';
import './index.css';

const App = () => {
  return (

    
     
      <div className='md:flex '>
    {/* Sidebar with sticky position */}
    
    <div className='sm:w-full md:w-1/5 md:sticky md:top-0 md:h-screen'>

      <Sidebar/>
    </div>

 
    <div className='overflow-y-scroll flex-1'>
   
      <div className='w-full h-screen'>
      <MoveList />
      </div>
    </div>
    </div>
  );
};

export default App;
