import React, {useEffect} from 'react';
import './styles/iosapp.scss'

function IosApp(props) {
    const style = {
        top: props.position.y,
        left: props.position.x,
    }
    useEffect(()=>{
        document.querySelector('.app-display').classList.add('opened');
    })
    return (
        <div className={'app-display'} style={style}>

        </div>
    );
}

export default IosApp;