import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components and pages imported
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import Table1 from "./Pages/Table1";
import Table2 from "./Pages/Table2";
import Table3 from "./Pages/Table3";
import Schema from "./Pages/Schema";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header element={<Header />}/>
        <Routes> 
          <Route path="/" exact element={<Login />}></Route>
          <Route path ='/about' element={<About/>}></Route> 
          <Route path ='/home' element={<Home/>}></Route> 
          <Route path ='/help' element={<Help/>}></Route>
          <Route path ='/schema' element={<Schema/>}></Route>
          <Route path ='schema/table1' element={<Table1/>}></Route>
          <Route path ='schema/table2' element={<Table2/>}></Route>
          <Route path ='schema/table3' element={<Table3/>}></Route>
          
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
