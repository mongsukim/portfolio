import React from "react"; 
import { HashRouter as Router, Route } from "react-router-dom";

import Main from "./components/pages/Main"; 
import Works from "./components/pages/Works"; 
import Cssani from "./components/pages/Cssani"; 
import About from "./components/pages/About"; 

function App(){
  return(
    <Router>
      <Route path="/" exact component={Main}/>
      <Route path="/works" exact component={Works}/>
      <Route path="/about" exact component={About}/>
      <Route path="/cssani" exact component={Cssani}/>
      {/* <Route path="/contact" exact component={Contact}/> */}
    </Router>
  )
}

export default App;