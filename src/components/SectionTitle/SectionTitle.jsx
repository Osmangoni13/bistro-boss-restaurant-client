import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h3>{subHeading}</h3>
            {heading}
        </div>
    );
};

export default SectionTitle;