import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header element={<Header />}/>
        <Routes> 
          <Route path="/" exact element={<Login />}></Route>
          <Route path ='/about' element={<About/>}></Route> 
          <Route path ="/home" element={<Home/>}></Route> 
          <Route path ='/help' element={<Help/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
