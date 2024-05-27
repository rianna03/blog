// import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar></Navbar>
     <div className='content'>
      
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="/Create">
        <Create></Create>
        </Route>

        <Route path="/Blog-details/:id">
        <BlogDetails></BlogDetails>
        </Route>

        <Route path="*">
        <NotFound></NotFound>
        </Route>

        
      </Switch>

     </div>
    </div>
    </Router>
  );
}

export default App;
