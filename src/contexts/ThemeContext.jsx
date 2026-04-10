import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

useEffect(() => {
  const localTheme = localStorage.getItem('lc-theme')
  if (localTheme) setTheme(localTheme)

}, [])

useEffect(() => {
  localStorage.setItem('lc-theme', theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)