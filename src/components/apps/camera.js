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
    let closeanim = () => {
        const animdiv = document.querySelector('#animation');
        const img = document.querySelector('.preview');
        animdiv.classList.add('no-open');
        animdiv.classList.remove('open');
        animdiv.style.left = img.offsetLeft+"px";
        animdiv.style.top = (img.offsetTop+img.parentNode.parentNode.offsetTop)+"px";
    }
    let capture = () => {
        let canvas = document.getElementById('canvas-img');
        let video = document.querySelector('.videoElement');
        let img = document.querySelector('.preview');
        let img2 = document.querySelector('#animation');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        // Other browsers will fall back to image/png
        img2.style.backgroundImage = 'url(' + canvas.toDataURL("image/webp") + ')';
        img2.classList.remove('no-open');
        img2.classList.add('open');
        setTimeout(()=>closeanim(), 100);
        img.style.backgroundImage = 'url(' + canvas.toDataURL("image/webp") + ')';
    }
    useEffect(() => {
        onCamera();
        closeanim();
    }, [])
    return (
        <div>
            <div className={'camera-top-controls'}>

            </div>
            <div id={'animation'} className={'no-open'}/>
            <video className={'videoElement'} autoPlay={true}/>
            <div className={'camera-controls'}>
                <div className={'mode-slider'}>

                </div>
                <div className={'buttons'}>
                    <div className={'preview'}>
                        <canvas className={'pic-canvas'} id={'canvas-img'}>

                        </canvas>
                    </div>
                    <div className={'shutter'} onClick={capture}/>
                    <div className={'switch-cam'}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Camera;