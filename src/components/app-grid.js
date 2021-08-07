import React from 'react';
import 'flickity/dist/flickity.min.css';
import './styles/appgrid.scss'


function AppGrid(props) {
    let setPos = (e) => {
        const elem = e.target;
        let appGrid=document.querySelector('.app-grid');
        const pos = {
            x: elem.offsetLeft+(elem.offsetWidth/2)+appGrid.offsetLeft,
            y: elem.offsetTop+(elem.offsetHeight/2)+appGrid.offsetTop,
        };
        props.setPosition(pos);
        console.log(e.target,e.target.dataset);
        props.setStatus(elem.dataset.index)
    }
    return (
        <div className={'app-grid'}>
            <div className="main-carousel" data-flickity='{ "cellAlign": "left" }'>
                <div className="carousel-cell">
                    <div className="app-page">
                        {
                            [...Array(20)].map(
                                (value, index, array) => {
                                    return (
                                        <div key={index}>
                                            <img onClick={setPos} data-index={index+1} src={"img/icons/"+(index+1)+".svg"} alt=""/>
                                        </div>

                                    )
                                }
                            )
                        }

                    </div>
                </div>
                {/*<div className="carousel-cell">*/}
                {/*    <div className="app-page">*/}
                {/*        <div>*/}
                {/*            <img src="img/icons/21.svg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="carousel-cell">*/}
                {/*    <div className="app-page">*/}
                {/*        <div>*/}
                {/*            /!*<img src="img/icons/22.svg" alt=""/>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default AppGrid;