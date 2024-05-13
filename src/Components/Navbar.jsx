import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed bottom-0 w-96 h-24 bg-gray-800 text-white shadow-lg">
            <div className="flex justify-around pt-16">
                <Link to="/">Page1</Link>
                <Link to="/page2">Page2</Link>
                <Link to="/page3">Page3</Link>
                <Link to="/page4">Page4</Link>
            </div>
        </nav>
    );
}

export default Navbar;