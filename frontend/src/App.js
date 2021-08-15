import React, {useState, useEffect} from 'react'
import './App.css'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Projects from './components/Projects';
import Embeds from './components/Embeds';
import Goalhelp from './components/Goalhelp';

function App() {
  const [redirect, setRedirect] = useState('')
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/projects" component={() => <Projects link={[setRedirect]}/>} />
            <Route exact path="/goalhelp" exact component={() => <Goalhelp/>}/>
            <Route path={`/${redirect}`} component={() => <Embeds info={[redirect]}/>}/>
          </Switch>
        </div>
      </Router>
      </>
  );
}

// Name: Follow Thru
/*
  -Incentivized project management system
    -> tracking contributions
    -> creating modularity
    -> splitting work into smaller pieces
    -> timeline/due date, reminders for set due dates
    -> help pages
    -> task views
*/
export default App;
