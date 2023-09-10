import { useContext } from "react"
import { ThemeContext } from "../components/ThemeContextProvider"

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) throw new Error('useThemeContext must be used within a ThemeContextProvider')

  return theme
}