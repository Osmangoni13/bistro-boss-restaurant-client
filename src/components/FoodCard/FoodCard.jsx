import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className='relative'>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <p className='absolute top-3 right-6 px-2 bg-slate-900 text-white'>${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn mb-2 items-center flex justify-center bg-slate-100 mx-auto btn-outline mt-4 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;