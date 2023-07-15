import { useReducer, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'

import NavigationBar from './components/navigationBar/NavigationBar'
import ProductList from './components/productList/ProductList'
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Product from './components/productList/Product';

const initialState = {
    cart: [] as Product[],
    favorites: [] as Product[]
}

const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}

interface AppContextType {
    state: typeof initialState;
    dispatch: React.Dispatch<any>;
}

export const Context = createContext<AppContextType>({} as AppContextType)

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Context.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <NavigationBar brandName='My shopping list' />
                    <Routes>
                        <Route index element={<ProductList />} />
                        <Route path='/shoppingCart' element={<ShoppingCart />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </>
    )
}

export default App
