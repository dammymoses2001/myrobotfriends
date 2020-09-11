import React from 'react';
import './Robot.css'
const Navigation = ({ back }) => {
    return (
        <nav>
            <a className="back grow" href="/" onClick={back}>Back</a>
        </nav>
    )
}
export default Navigation;