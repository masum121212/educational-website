import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/home">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route >
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
