import React from 'react';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Loading from '../../shared/Loading/Loading';
import Product from '../Product/Product';
import './Products.css'
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const slicedProducts = products.slice(0, 6);

    if(slicedProducts.length === 0){
        return <Loading></Loading>
    }
    
    return (
        <div className='container mx-auto mt-5'>
           <h1 className='products text-center mt-4 mx-auto'>Products</h1>
            <div>
                <CardGroup>
                {
                    slicedProducts.map(product => <Product key={product.id} product={product}></Product>)
                }
                </CardGroup>
            </div>
            <div className='text-center w-100'>
                <Link to={"/manageInventory"}><button className='button'>Manage Inventory</button></Link>
            </div>
       </div>
    );
};

export default Products;