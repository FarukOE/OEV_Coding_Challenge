import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import config from '../../config/Config.json'
import Product from "./Product"
import ShoppingCart from "../shoppingCart/ShoppingCart"

const ProductList: React.FC = () => {
    const [allProducts, setProducts] = useState<Product[]>([])
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
        cart: [],
        shoppingPrice: 0,
        shippingPrice: 0
    })
    const [favorites, setFavorites] = useState<Product[]>([])

    useEffect(() => {
        fetch(config.dummyJson.url + config.dummyJson.endpoints.product, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                // console.log(data.products)
                setProducts(data.products)
            }).catch(error => {
                console.log(error)
            })
    }, [])


    function addToShoppingCart(product: Product): void {
        setShoppingCart((prevCart) => {
            const newCart = [...prevCart.cart, product]
            const newPrice = prevCart.shoppingPrice + product.price
            return { cart: newCart, shoppingPrice: newPrice, shippingPrice: 0 }
        })
    }


    function deleteAllProductsFromCart(): void {
        setShoppingCart(() => {
            const newCart: Product[] = []
            const newPrice = 0
            return { cart: newCart, shoppingPrice: newPrice, shippingPrice: 0 }
        })
    }

    function deleteProductFromCart(currentProduct: Product, currentProductIndex: number): void {
        const newCart = shoppingCart.cart.filter((product, index) => index !== currentProductIndex)
        const newPrice = shoppingCart.shoppingPrice - currentProduct.price
        setShoppingCart({ cart: newCart, shoppingPrice: newPrice, shippingPrice: 0 })
    }

    function toggleFavorite(product: Product): void {
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.includes(product);
            if (isFavorite) {
                return prevFavorites.filter(favorite => favorite !== product);
            } else {
                return [...prevFavorites, product];
            }
        });
    }

    return (
        <>
            <Container fluid="md" style={{ marginTop: '5rem' }}>
                <Row>
                    <Col>
                        {allProducts.map((product, index) => (
                            <Card key={index} style={{ width: '18rem', margin: '1em 0em' }}>
                                <Card.Img variant="top" src={product.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                                    <Card.Title>{product.price} €</Card.Title>
                                </Card.Body>
                                <div>
                                    {/* {const isFavourite: boolean = favorites.filter(favorite => favorite === product) ? true : false} */}
                                    <Button
                                        variant={favorites.includes(product) ? "secondary" : "secondary"}
                                        onClick={() => toggleFavorite(product)}
                                    >
                                        {favorites.includes(product) ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                        )}
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="secondary" onClick={() => addToShoppingCart(product)}>Add to list</Button>
                                </div>
                            </Card>
                        ))}
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Shopping Cart</Card.Title>
                            <Button variant="outline-secondary" onClick={() => deleteAllProductsFromCart()}>Delete all</Button>
                            {shoppingCart.cart.map((product, index) => (
                                <Row>
                                    <Col>
                                        <Card key={index} style={{ width: '18rem', margin: '1em 0em' }}>
                                            <Card.Img variant="top" src={product.thumbnail} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                                                <Card.Title>{product.price} €</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Button onClick={() => deleteProductFromCart(product, index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                            </svg>
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                            <ListGroup>
                                <ListGroup.Item>Subtotal: {shoppingCart.shoppingPrice} €</ListGroup.Item>
                                <ListGroup.Item>Shipping: ---</ListGroup.Item>
                            </ListGroup>
                            <ListGroup>
                                <ListGroup.Item>Total: {shoppingCart.shoppingPrice + shoppingCart.shippingPrice} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductList