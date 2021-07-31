import React, {useEffect} from 'react';
import './styles/iosapp.scss'
import Facetime from "./apps/facetime";
import Calender from "./apps/calender";
import Photos from "./apps/photos";
import Camera from "./apps/camera";
import Mail from "./apps/mail";
import Clock from "./apps/clock";
import Maps from "./apps/maps";
import Weather from "./apps/weather";
import Reminder from "./apps/reminder";
import Memo from "./apps/memo";
import Stocks from "./apps/stocks";
import News from "./apps/news";
import Books from "./apps/books";
import Appstore from "./apps/appstore";
import Podcasts from "./apps/podcasts";
import Appletv from "./apps/appletv";
import Health from "./apps/health";
import Home from "./apps/home";
import Wallet from "./apps/wallet";
import Settings from "./apps/settings";
import Phone from "./apps/phone";
import Messages from "./apps/messages";
import Safari from "./apps/safari";
import Music from "./apps/music";
import NotifBar from "./notif-bar";

function IosApp(props) {
    const style = {
        top: props.position.y,
        left: props.position.x,
    }
    useEffect(() => {
        document.querySelector('.app-display').classList.add('opened');
    })
    let arr = [
        <Facetime key={1}/>,
        <Calender key={1}/>,
        <Photos key={1}/>,
        <Camera key={1}/>,
        <Mail key={1}/>,
        <Clock key={1}/>,
        <Maps key={1}/>,
        <Weather key={1}/>,
        <Reminder key={1}/>,
        <Memo key={1}/>,
        <Stocks key={1}/>,
        <News key={1}/>,
        <Books key={1}/>,
        <Appstore key={1}/>,
        <Podcasts key={1}/>,
        <Appletv key={1}/>,
        <Health key={1}/>,
        <Home key={1}/>,
        <Wallet key={1}/>,
        <Settings key={1}/>,
        <Phone key={1}/>,
        <Messages key={1}/>,
        <Safari key={1}/>,
        <Music key={1}/>,
    ];

    return (
        <div className={'app-display'} style={style}>
            <NotifBar/>
            {
                arr.map((value, index, array) => {
                    return (
                        props.status === '' + [index + 1] ? arr[index] : ''
                    )
                })
            }
                <div className={'bottom-bar'}>

            </div>
        </div>
    );
}

export default IosApp;