import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/layouts/login'
import Main from './components/layouts/main'
import Users from './components/layouts/users'
import NavBar from './components/navBar'

const App = () => {
  return (<>
    <NavBar />
    <Switch>
      <Route path={`/`} exact component={Main}/>
      <Route path={`/users/:userId?`} component={Users}/>
      <Route path={`/login`} component={Login}/>
      <Redirect to={`/404`}/>
    </Switch>
  </>)
}

export default App
