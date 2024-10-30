import React from 'react'

const myContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  activeRoute: 'Home',
  changeRoute: () => {},
})

export default myContext
