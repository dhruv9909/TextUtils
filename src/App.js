import React , {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    
    const [alert, setAlert] = useState(null)
  
    const showalert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    }

    const [mod, setMod] = useState('light')
    
    const togglemode = ()=>{
    if (mod === "light"){
        setMod("dark");
        document.body.style.backgroundColor = '#464647';
        showalert("Dark mode has been enabled" , "success")
        //document.title = "TextUtils - Dark";
        }
    else{
        setMod("light");
        document.body.style.backgroundColor = 'white';
        showalert("Light mode has been enabled" , "success")
        //document.title = "TextUtils - Light";
        }
        }
  
return (
      
        <Router basename='textutils'>
        <Navbar title = "Textutils" about = "About TextUtils" mode = {mod} togglemode={togglemode}/>
        <Alert alert = {alert}/>

        <Routes>
        <Route exact path="/about" element={<About mode = {mod} />} />
        <Route exact path="/"
        element={<Textforms heading = "Enter the text below to analyze" mode = {mod} showalert={showalert} />} />
        </Routes>

        </Router>

);
}

export default App;
