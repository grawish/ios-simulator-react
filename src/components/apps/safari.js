import React from 'react';
import './style/safari.scss';

function Safari(props) {
    return (
        <div className={'safari'}>
            <div className={'safari-header'}>

            </div>
            <div className={'safari-main'}>
                <iframe id={'safari'} src={'https://m.google.com/webhp?igu=1'} title={'safari'}>

                </iframe>
            </div>
            <div className={'safari-footer'}>

            </div>
        </div>
    );
}

export default Safari;