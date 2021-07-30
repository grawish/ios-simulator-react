import React from 'react';
import d1 from './img/icons/d1.svg';
import d2 from './img/icons/d2.svg';
import d3 from './img/icons/d3.svg';
import d4 from './img/icons/d4.svg';
import './styles/dock.scss'

function Dock(props) {
    let setPosition = (e) => {
        const elem = e.target;
        let dock = document.querySelector('.dock');

        const pos = {
            x: elem.offsetLeft + (elem.offsetWidth / 2) + dock.offsetLeft,
            y: elem.offsetTop + (elem.offsetHeight / 2) + dock.offsetTop,
        };
        props.setPosition(pos);
        console.log(e.target, e.target.dataset);
        props.setStatus(elem.dataset.index)
    }
    let arr = [d1, d2, d3, d4];
    return (
        <div className={'dock'}>
            {
                [...Array(4)].map((value, index, array) => {
                    return (
                        <div key={index}>
                            <img src={arr[index]} onClick={setPosition} data-index={index + 21} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Dock;