import React, { Fragment }  from 'react';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className="App">
      <Container maxWidth="md">

        <h1>Blue Buckle Comics</h1>

        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs centered="true" value={location.pathname}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Gallery" component={Link} to="/gallery" />
                <Tab label="Contact" component={Link} to="/contact" />
              </Tabs>
              <Switch>
                <Route path="/contact" render={Contact} />
                <Route path="/gallery" render={Gallery} />
                <Route path="/" render={Home} />
              </Switch>
            </Fragment>
          )}
        />
        </Container>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
