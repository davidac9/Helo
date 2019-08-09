import React from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard'
// import Auth from './Components/Auth/Auth'
// import From from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
// import Post from './Components/Post/Post'
import routes from './routes'
import {withRouter} from 'react-router'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      
      <Nav/>
      {routes}
    </div>
  );
}
// hi

export default App;
