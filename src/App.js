import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/loading/Loading';
import Main from './components/main/Main';
import Cards from './components/cards/Cards';
import ProjectsJor from './components/pageJorge/ProyectCardJ';
import Projects from './components/project-grid/ProyectCard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <Switch>
        {isLoading ? (
        <Route exact path="/" component={Loading} className='App-header'/>
        ) : (
        <Route exact path="/" component={Main} />
        )}
        <Route path="/" exact>
          <Cards />
        </Route>
        <Route path="/jorge" exact>
          <ProjectsJor />
        </Route>
        <Route path="/" exact>
          <Cards />
        </Route>
        <Route path="/majo" exact>
          <Projects/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
