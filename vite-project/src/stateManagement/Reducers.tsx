// type ActionMap<M extends { [index: string]: any }> = {
//     [Key in keyof M]: M[Key] extends undefined ? 
//         { type: Key } : { type: Key
//                          payload: M[Key] }
// }

// export enum Types {
//     Create = 'CREATE_PRODUCT',
//     Delete = 'DELETE_PRODUCT',
//     Add = 'ADD_PRODUCT'
// }

// type ProductPayload = {
//     [Types.Create] : {

//     }
// }
// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cart: state.cart.filter(product => product.id !== action.payload.id)
//             }
//         case 'CLEAR_CART':
//             return {
//                 ...state,
//                 cart: []
//             }
//         case 'ADD_TO_FAVORITES':
//             return {
//                 ...state,
//                 favorites: [...state.favorites, action.payload]
//             }
//         case 'REMOVE_FROM_FAVORITES':
//             return {
//                 ...state,
//                 favorites: state.favorites.filter(product => product.id !== action.payload.id)
//             }
//         default:
//             return state
//     }
// }