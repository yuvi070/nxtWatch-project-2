import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import myContext from './context/myContext'
import Login from './component/Login'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <Switch>
        <myContext.Provider value={{isDark}}>
          <Route exact path="/" component={Login} />
        </myContext.Provider>
      </Switch>
    )
  }
}

export default App
