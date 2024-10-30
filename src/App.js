import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import myContext from './context/myContext'

import Login from './component/Login'
import Home from './component/Home'
import ProtectedRoute from './component/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeRoute: 'Home',
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeRoute = id => {
    this.setState({activeRoute: id})
  }

  render() {
    const {isDark, activeRoute} = this.state
    return (
      <Switch>
        <myContext.Provider
          value={{
            isDark,
            changeTheme: this.changeTheme,
            changeRoute: this.changeRoute,
            activeRoute,
          }}
        >
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </myContext.Provider>
      </Switch>
    )
  }
}

export default App
