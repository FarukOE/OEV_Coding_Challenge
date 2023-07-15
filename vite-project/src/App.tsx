import { useState } from 'react'
// import './App.css'

import NavigationBar from './components/navigationBar/NavigationBar'
import ProductList from './components/productList/ProductList'

function App() {
  
  return (
    <>
      <NavigationBar brandName='My shopping list'></NavigationBar>
      <ProductList />
    </>
  )
}

export default App
