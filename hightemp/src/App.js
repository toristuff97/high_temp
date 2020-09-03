import React from 'react';
import './App.css';
import Shop from './Components/Shop';
import Home from './Components/Home';
import Custom from './Components/Custom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/shop">
            <Shop/>
          </Route>

          <Route path="/custom">
            <Custom/>
          </Route>

        </Switch>
      </Router>
      
      {/* This is a bootflat test */}
      {/* <a className="btn btn-primary" href="#" >Flat button</a> */}
      {/* <CakesAndPies/> */}
    </div>
  );
}

export default App;
