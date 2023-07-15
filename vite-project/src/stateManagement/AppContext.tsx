// import React, { createContext, useReducer } from 'react';

// import Product from '../components/productList/Product';
// import { reducer } from './reducers';

// type InitialStateType = {
//     cart: Product[],
//     favorites: Product[]
// }

// const initialState: InitialStateType = {
//     cart: [],
//     favorites: []
// }

// const AppContext = createContext<{
//     state: InitialStateType,
//     dispatch: React.Dispatch<any>
// }>({
//     state: initialState,
//     dispatch: () => null
// })

// const mainReducer = ({cart, favorites}: InitialStateType, action: any) => ({
//     cart: reducer(cart, action),
//     favorites: reducer(favorites, action)
// })
// const AppProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
//     const [state, dispatch] = useReducer(mainReducer, initialState)

//     return (
//         <AppContext.Provider value={{ state, dispatch }}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export { AppContext, AppProvider }