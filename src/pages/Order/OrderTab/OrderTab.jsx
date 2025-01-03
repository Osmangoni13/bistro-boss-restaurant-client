import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    const itemsPerPage = 6; // Number of items per page
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Split items into pages
    const paginatedItems = Array.from({ length: totalPages }, (_, index) => {
        const start = index * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    });

    // Swiper pagination config
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {paginatedItems.map((page, pageIndex) => (
                    <SwiperSlide key={pageIndex}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {page.map(item => (
                                <FoodCard key={item._id} item={item}></FoodCard>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;
