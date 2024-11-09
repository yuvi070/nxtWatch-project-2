import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import myContext from './context/myContext'

import Login from './component/Login'
import Home from './component/Home'
import ProtectedRoute from './component/ProtectedRoute'
import Trending from './component/Trending'
import Gaming from './component/Gaming'
import Saved from './component/Saved'
import VideoItem from './component/VideoItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeRoute: 'Home',
    savedList: [],
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeRoute = id => {
    this.setState({activeRoute: id})
  }

  updateSavedList = list => {
    const {savedList} = this.state
    const isExist = savedList.find(each => each.id === list.id)
    if (isExist === undefined) {
      this.setState(prev => ({
        savedList: [...prev.savedList, list],
      }))
    }
  }

  render() {
    const {isDark, activeRoute, savedList} = this.state
    return (
      <Switch>
        <myContext.Provider
          value={{
            isDark,
            changeTheme: this.changeTheme,
            changeRoute: this.changeRoute,
            activeRoute,
            savedList,
            updateSavedList: this.updateSavedList,
          }}
        >
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={Saved} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
        </myContext.Provider>
      </Switch>
    )
  }
}

export default App
