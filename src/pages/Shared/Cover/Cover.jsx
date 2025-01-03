import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;