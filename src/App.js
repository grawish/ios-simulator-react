import './App.css';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import Frame from "./components/frame";

function App() {
    let flscrn = () =>{
        let divtohide = document.querySelector('.mobile-overlay');
        let elem = document.querySelector('.body');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        divtohide.style.display = "none";
    }
    return (
        <div className="body">
            <MobileView>
                <div className={'mobile-overlay'}>
                    <div className={'start-btn'} onClick={flscrn}>
                        Start
                    </div>
                </div>
            </MobileView>
            <Frame/>
        </div>
    );
}

export default App;
