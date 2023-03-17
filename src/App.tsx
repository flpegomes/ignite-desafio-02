import { BrowserRouter } from 'react-router-dom'
import { CoffeesContextProvider } from './contexts/Coffees'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter>
      <CoffeesContextProvider>
        <Router />
      </CoffeesContextProvider>
    </BrowserRouter>

  )
}

export default App
