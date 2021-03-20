import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideDetails from './components/RideDetails/RideDetails';

export const UserContext=createContext();
function App() {
 const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  <Router>
     <Switch>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/login">
        <Login/>
       </Route>
       <Route path="/rideDetail">
       <RideDetails/>
       </Route>
       <PrivateRoute path="/destination">
        <Destination/>
       </PrivateRoute>

       <Route path="/blog">
        <Blog/>
       </Route>
       <Route path="/contact">
        <Contact/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="*">
        <NoMatch></NoMatch>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
