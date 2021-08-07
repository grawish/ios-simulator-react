import React, {useEffect} from 'react';
import './styles/iosapp.scss'
import barImg from './img/bar.svg';
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
    let closeAnimation = () => {
        const bar = document.getElementById('bottom-bar');
        // bar.addEventListener('mousedown', () => );
        bar.addEventListener('dragstart', dragStart);
        bar.addEventListener('drag', drag);
        bar.addEventListener('dragend', mouseup);
    }
    let dragStart = e =>{
        const img = document.createElement("img");
        img.src = "http://kryogenix.org/images/hackergotchi-simpler.png";
        document.body.appendChild(img);
        img.style.width = "0.01vh";
        img.style.height = "0.01vh";
        img.style.position = "absolute";
        img.style.left = "0";
        img.style.top = "0";
        // img.style.display = "none";
        e.dataTransfer.setDragImage(img, 0, 0);
    }
    let drag = (e) => {
        let displayHeight = document.querySelector('.display').offsetHeight;
        let displayOffset = document.querySelector('.display').offsetTop;
        let percentage = ((e.clientY - displayOffset) * 100) / displayHeight;
        let app = document.querySelector('.app-display');
        // console.log(percentage);
        app.style.height = percentage + '%';
        app.style.width = percentage + '%';
        // app.style.top = app.
        app.style.transition = '0s';
        if (percentage > 50 && percentage < 100) {
            app.classList.remove('opened');
            app.style.top = ((100 - percentage) / 2) + '%';
            app.style.left = ((100 - percentage) / 2) + '%';
            console.log(100 - percentage);
        }
    }
    let mouseup = (e) => {
        let displayHeight = document.querySelector('.display').offsetHeight;
        let displayOffset = document.querySelector('.display').offsetTop;
        let percentage = ((e.clientY - displayOffset) * 100) / displayHeight;
        let app = document.querySelector('.app-display');
        app.removeAttribute('style');
        if (percentage > 0 && percentage < 100) {
            if (percentage > 80) {
                app.classList.add('opened');
            }
            if (percentage < 80) {
                app.classList.remove('opened');
                app.style.top = props.position.y + "px";
                app.style.left = props.position.x + "px";
                setTimeout(() => {
                    app.style.display = "none";
                    props.setStatus(0);
                }, 500)
            }
        }
    }
    const style = {
        top: props.position.y,
        left: props.position.x,
    }
    useEffect(() => {
        document.querySelector('.app-display').removeAttribute('style');
        document.querySelector('.app-display').classList.add('opened');
        document.querySelector('.app-display').removeAttribute('style');
        closeAnimation();
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
                <div className={'bar'}>
                    <img src={barImg} id={'bottom-bar'} alt={''}/>
                </div>
            </div>
        </div>
    );
}

export default IosApp;