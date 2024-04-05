import React from 'react';

const Terms = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="terms">
            <div className="terms-content">
                {children}
            </div>
        </div>
    );
};

export default Terms;
