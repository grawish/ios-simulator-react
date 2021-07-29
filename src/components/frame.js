import React, {useState} from 'react';
import './styles/frame.scss'
import HomeScreen from "./homescreen";
import IosApp from "./iosapp";
import 'flickity'


function Frame(props) {
    const [status, setStatus] = useState(0);
    const [position, setPosition] = useState({x: null, y: null});
    console.log(status,position);
    return (
        <div className={'frame'}>
            <div className={'display'}>
                <HomeScreen setStatus={setStatus} setPosition={setPosition}/>
                {status ? <IosApp status={status} position={position}/> : ''}

            </div>
        </div>
    );
}

export default Frame;