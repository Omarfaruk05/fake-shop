import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading'
import "./Details.css"

const Details = () => {
    const {id} = useParams();
    const[quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const { title, image, price, description} = product;

    const url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    if(product === {}){
        return <Loading></Loading>
    }

    const handleIncrease = () => {
        const result = quantity + 1;
        setQuantity(result);
    }
    const handleDecrease = () => {
        if(quantity === 0){
            setQuantity(quantity);
        }
        else{
            const result = quantity - 1;
            setQuantity(result);
        }
    }

    return (
        <div className=' bg-light p-4'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md text-center mx-4 py-5 px-1 rounded-4 bg-white'>
                        <div><img  className='w-75 rounded ' src={image} alt="product" /></div>
                    </div>
                    <div  className='col-md'>
                        <div>
                            <h1>{title}</h1>
                            <div>
                                {/* <Rating
                                initialRating={product?.rating?.rate}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon className='text-secondary' icon={faStar} />}
                                readonly
                                ></Rating> */}
                                <p>({product?.rating?.count} customer review)</p>
                            </div>
                            <h3 className='my-3 orange-color'>${price}</h3>
                            <p>{description}</p>
                            <div className='d-flex gap-3 justify-content-center my-2'>
                                <div className='d-flex justify-content-around align-items-center gap-5 bg-white rounded quantity-field orange-color'>
                                    <button onClick={handleDecrease} className='btn fw-bold'>-</button>
                                    <p className='my-auto'>{quantity}</p>
                                    <button onClick={handleIncrease} className='btn fw-bold'>+</button>
                                </div>
                                <div>
                                    <button className='btn btn-success px-4'><small>ADD TO CART </small></button>
                                </div>
                            </div>
                            <div className='mt-4 text-center'>
                                <button className='btn btn-success w-50 mx-auto fw-bold'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;