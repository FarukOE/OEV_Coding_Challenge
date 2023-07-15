import Product from "../productList/Product"

export default interface ShoppingCart {
    cart: Product[],
    shoppingPrice: number,
    shippingPrice: number
}