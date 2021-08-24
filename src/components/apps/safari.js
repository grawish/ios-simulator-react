import React from 'react';
import './style/safari.scss';

function Safari(props) {
    return (
        <div className={'safari'}>
            <div className={'safari-header'}>

            </div>
            <div className={'safari-main'}>
                <iframe id={'safari'} src={'https://devsnest.in'} title={'safari'} />
            </div>
            <div className={'safari-footer'}>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Safari;