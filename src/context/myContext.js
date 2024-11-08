import React from 'react'

const myContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  activeRoute: 'Home',
  changeRoute: () => {},
  savedList: [],
  updateSavedList: () => {},
})

export default myContext
