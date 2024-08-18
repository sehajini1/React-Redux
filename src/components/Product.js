import React, { useEffect, useState } from 'react';

export default function Product(){
    const [products, getProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))
    },[]);
    return(
        <>
           <h1>dashboard</h1> 
           {JSON.stringify(products)}
        </>
    );
}