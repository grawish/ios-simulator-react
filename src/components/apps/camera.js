import React, {useEffect} from 'react';
import './style/camera.scss'

function Camera(props) {
    let onCamera = () => {
        const video = document.querySelector(".videoElement");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: true})
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
        }
    }
    useEffect(() => {
        onCamera();
    }, [])
    return (
        <div>
            <video className={'videoElement'} autoPlay={'true'}/>
            <img src='' />
            <canvas style={{ display: 'none' }}>
            </canvas>
        </div>
    );
}

export default Camera;