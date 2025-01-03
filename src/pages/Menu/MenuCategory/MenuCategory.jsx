import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <section className='grid md:grid-cols-2 gap-10 mx-auto mt-16 mb-8'>
                {
                    items.map(item => <MenuItem key={item._id}
                        item={item}></MenuItem>)
                }
            </section>
            <Link to={`/order/${title}`}><button className='btn mb-2 items-center flex justify-center mx-auto btn-outline mt-4 border-0 border-b-4 text-black'>ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCategory;