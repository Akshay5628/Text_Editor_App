//import logo from './logo.svg';

import { useState } from 'react';
import './Appa.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {

  const [mode, setMode]=useState('light');


 
  const switchMode=()=>
  {
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#244368';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
       
      }
  }
  return (
  <>
    <Navbar title="Text_App" subtitle1="Home" subtitle2="About Text_App" mode={mode} switchMode={switchMode} />   
    <div className="container" />    

    <TextForm heading="Enter the text to Analyze." mode={mode} />
    {/* <About className="container"/> */}

  </>
  
  );
}

export default App;
