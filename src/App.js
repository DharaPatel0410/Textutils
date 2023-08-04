//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
//import About from './Components/About';


function App() {

  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

const showAlert = (message,type) => {

setAlert({
  msg : message,
  type : type
})

setTimeout(() => {
  setAlert(null);
  
}, 1500);
}

  const toggleMode = () =>{

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#142e4b' 
    showAlert("Dark mode is enabled","success");
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled","success");

  }
  }

  return (
    
    <div>
        <Navbar title = "TextUtils"  about = "About us" mode = {mode} toggleMode = {toggleMode}></Navbar>
        <Alert alert = {alert}/>
       <div className="container my-3">
          <Textform  showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}></Textform>
       </div>
      
    </div>
   );
}

export default App;
