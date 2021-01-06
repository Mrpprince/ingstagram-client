import './App.css';
import Navbar from './Components/Navbar';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory
} from "react-router-dom";
import Home from './Components/Screens/Home';
import Login from './Components/Screens/Login';
import Signup from './Components/Screens/Signup';
import Profile from './Components/Screens/Profile';
import Signin from './Components/Screens/Signin';
import CreatePost from './Components/Screens/CreatePost';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducers/userRuducer';

export const UserContext = createContext()


const Routing = () => {
  const history = useHistory();
  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/create">
      <CreatePost></CreatePost>
    </Route>
    <Route path="/signup">
      <Signup></Signup>
    </Route>
    <Route path="/signin">
      <Signin></Signin>
    </Route>
    <Route path="/profile">
      <Profile></Profile>
    </Route>
  </Switch>
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={ {state, dispatch}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
