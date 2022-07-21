import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);


    return (
        <div>
            
        </div>
    );
};

export default Details;