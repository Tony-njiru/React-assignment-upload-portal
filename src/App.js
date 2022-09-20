import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";

function App() {
  return (
      <Router>
          <div className="App">
             <Switch>
                 <Route exact path="/">
                     <Login/>
                 </Route >
                 <Route exact path="/signup">
                     <SignUp/>
                 </Route>
                 <Route exact path="/forgot">
                     <ForgotPassword />
                 </Route>
                 <Route exact path="/dashboard">
                     <Dashboard />
                 </Route>
             </Switch>
          </div>
      </Router>
  );
}

export default App;
