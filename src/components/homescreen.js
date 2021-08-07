import React from 'react';
import AppGrid from './app-grid';
import Dock from './dock';
import NotifBar from './notif-bar';


function HomeScreen(props) {
    return (
        <>
            <NotifBar/>
            <AppGrid setStatus={props.setStatus} setPosition={props.setPosition}/>
            <Dock setStatus={props.setStatus} setPosition={props.setPosition}/>
        </>
    );
}

export default HomeScreen;
