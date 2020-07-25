import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//Components
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';

import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  const [menuState, setMenuState] = useState(false);
  return <BrowserRouter>
    <div className="App container">
      <Header menuState={menuState} setMenuState={setMenuState} />
      <SidebarNav menuState={menuState} setMenuState={setMenuState} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/services" component={Services} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App;
