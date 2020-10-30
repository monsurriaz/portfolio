import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Projects from './components/Projects/Projects/Projects';
import Blogs from './components/Blogs/Blogs/Blogs';
import About from './components/About/About/About';
import Contact from './components/Contact/Contact/Contact';
import firebase from "firebase/app";
import "firebase/auth";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Projects></Projects>
          </Route>
          <Route path="/blog">
            <Blogs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
