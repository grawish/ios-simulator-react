import React from 'react';
import d1 from './img/icons/d1.svg';
import d2 from './img/icons/d2.svg';
import d3 from './img/icons/d3.svg';
import d4 from './img/icons/d4.svg';
import './styles/dock.scss'

function Dock(props) {
    return (
        <div className={'dock'}>
            <div>
                <img src={d1} alt="" />
            </div>
            <div>
                <img src={d2} alt="" />
            </div>
            <div>
                <img src={d3} alt="" />
            </div>
            <div>
                <img src={d4} alt="" />
            </div>
        </div>
    );
}

export default Dock;