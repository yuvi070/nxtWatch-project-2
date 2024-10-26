import React from 'react'

const myContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
})

export default myContext
