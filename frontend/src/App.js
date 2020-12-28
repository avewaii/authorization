import React from 'react'
import Registration from './Pages/Registration'
import Authorization from './Pages/Authorization'
import Table from './Pages/Table'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Button from './Components/Button'



function App() {  
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Authorization} />
        <Route path={'/registration'} exact component={Registration} />
        <Route path={'/table'} exact component={Table} />
        <Route path={'/button'} exact component={Button} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
