import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    let newDescription;
    const navigate = useNavigate();
    const {id, title, image, price} = product;
    

    const navigateToInventory = id => {
        navigate(`/details/${id}`)
    }

    return (
        <div className=' col-md-6 col-lg-4' >
        <Card  className='product-card m-4 mt-2 border-0'>
            <Card.Img variant="top" className='mx-auto m-2 rounded product-img' style={{width:'250px'}} src={image} />
            <Card.Body className='card-body p-2'>
            <Card.Title className='fs-5 mb-4 hover:orange-color'>{title}</Card.Title>
            <h4><span className='orange-color'>${price}</span></h4>
            <Card.Text>{newDescription}</Card.Text>
            <div className='btn-container'>
                <button onClick={() => navigateToInventory (id)} className='update-btn text-center w-75'>Details</button>
            </div>
            </Card.Body>      
        </Card>
    </div>
    );
};

export default Product;