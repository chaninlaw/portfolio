import { createContext, useState } from 'react'

interface ThemeContext {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContext | null>(null);

interface Props {
  children: React.ReactNode
}

export const ThemeContextProvider: React.FC<Props> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}


