import React, { useState } from 'react';
import { X } from 'lucide-react';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div style={{
            backgroundColor: 'var(--color-coral)',
            color: 'white',
            textAlign: 'center',
            padding: '12px 20px',
            fontSize: '0.9rem',
            fontWeight: 600,
            position: 'relative',
            zIndex: 1001, // Above Navbar
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <span>
                Learn how to automate your money using the 6-account setup.
                <a href="#" style={{ color: 'white', textDecoration: 'underline', marginLeft: '5px' }}>Register Today</a>
            </span>
            {/* Optional Close Button if desired, but IWT usually keeps it sticky or static */}
        </div>
    );
};

export default Banner;
