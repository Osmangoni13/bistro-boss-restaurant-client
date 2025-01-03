import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white py-12 bg-fixed bg-cover bg-center bg-no-repeat opacity-100 bg-opacity-40 bg-blend-overlay bg-slate-950'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className=' md:flex gap-12 justify-center items-center py-4 px-36 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <h3>January 20, 2025</h3>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline mt-4 border-0 border-b-4 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;