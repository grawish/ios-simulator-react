import React from 'react';
import reception from './img/status/reception.svg';
import wifi from './img/status/wifi.svg';
import battery from './img/status/battery.svg';
import './styles/notification.scss'

function NotifBar(props) {
    return (
        <div className={'notification-bar'}>
            <div className="notification-boxes notification-left">
                19:30
            </div>
            <div className="notification-boxes notification-right">
                <img src={reception} alt="Notification" className="notification-icon"/>
                <img src={wifi} alt="Notification" className="notification-icon"/>
                <img src={battery} alt="Notification" className="notification-icon"/>
            </div>


        </div>
    );
}

export default NotifBar;