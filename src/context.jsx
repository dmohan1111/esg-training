import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('alliad_api_key') || '')

  const saveApiKey = (key) => {
    setApiKey(key)
    localStorage.setItem('alliad_api_key', key)
  }

  return (
    <AppContext.Provider value={{ apiKey, saveApiKey }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
