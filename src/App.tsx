import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About';
import { ProductsPage } from './pages/ProductsPage';
import { Navigation } from './components/Navigation'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <ProductsPage /> } />
        <Route path='/about' element={ <About /> }/>
      </Routes>
    </>
  )
  
}

export default App;
