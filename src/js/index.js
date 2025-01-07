//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./component/secondsCounter.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));

window.onload = () => {
    let seconds= 0;
    setInterval(()=> {
        const uno= Math.floor(seconds/10000 % 10)
        const dos=Math.floor(seconds/1000 % 10)
        const tres=Math.floor(seconds/100 % 10) 
        const cuatro=Math.floor(seconds/10 % 10) 
        const cinco=Math.floor(seconds/1 % 10)
        // console.log(uno,dos,tres,cuatro,cinco)

        root.render(<SecondsCounter                 
            uno={uno} 
            dos={dos} 
            tres={tres} 
            cuatro={cuatro} 
            cinco={cinco}
            />
        );

        if(seconds < 5){
          seconds++;
        } else {
            seconds--;
        }
    }, 1000);
}

    

