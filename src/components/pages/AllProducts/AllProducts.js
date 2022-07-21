import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../shared/Loading/Loading';
import Product from '../Product/Product';

const AllProducts = () => {
    const [products] = useProducts();

    if(products.length === 0){
        return <Loading></Loading>
    }
    
    return (
        <div className='container'>
            <h3 className='products text-center mt-4 mx-auto'>All Products</h3>
            <div>
                <CardGroup>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
                </CardGroup>
            </div>
        </div>
    );
};

export default AllProducts;