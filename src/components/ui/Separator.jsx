import React from 'react';

const Separator = ({ className = "" }) => {
    return (
        <hr className={`border-t border-border-subtle w-full max-w-7xl mx-auto my-12 ${className}`} />
    );
};

export default Separator;
