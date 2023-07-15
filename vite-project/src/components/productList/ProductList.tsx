import React, { useState, useEffect, useContext } from "react";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import config from '../../config/Config.json'
import Product from "./Product"
import {Context} from '../../App'

const ProductList: React.FC = () => {
    const {dispatch} = useContext(Context)
    const [allProducts, setProducts] = useState<Product[]>([])

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
        console.log("test", product)

        return 
    }

    return (
        <>
            <Container fluid="md" style={{ marginTop: '5rem' }}>
                {allProducts.map((product, index) => (
                    <Card key={index} style={{ width: '18rem', margin: '1em 0em' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                            <Card.Title>{product.price} €</Card.Title>
                        </Card.Body>
                        <div>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </Button>
                        </div>
                        <div>
                            <Button variant="secondary" onClick={() => addToShoppingCart(product)}>Add to list</Button>
                        </div>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default ProductList