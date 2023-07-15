import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'

import NavigationBar from './components/navigationBar/NavigationBar'
import ProductList from './components/productList/ProductList'



function App() {
    return (
        <>
            <BrowserRouter>
                <NavigationBar brandName='My shopping list' />
                <Routes>
                    <Route index element={<ProductList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
