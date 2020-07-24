import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Pizza from './Form/Form'
import Congrats from './Congrats'

//useRouteMatch hook is to enable fork pathing in the URL when the forking path is not the last component of the URL
//form validation is the method of ensuring the form has the necessary data in the format that is expected by the form handlers
//End to end testing is a form of testing that asserts tests with emphasis on a larger scope of the UI. It ensures components of the website mesh well with each other.

const App = () => {
  const [pizzaData, setPizzaData] = useState(false)
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pizza'>
          <Pizza pizzaData={pizzaData} setPizzaData={setPizzaData}/>
        </Route>
        <Route path='/congrats'>
          <Congrats pizzaData={pizzaData}/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
