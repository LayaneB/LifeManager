import React from "react";
import { LoadContainer } from "./style";
// import Lottie from 'react-lottie';
// import animation from '../../animations/70324-loader-animation-for-website-website-loader-animation.json';


const Loader: React.FC = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animation, 
    // };
    return (
        <LoadContainer>
            <img 
                    src="https://c.tenor.com/I9O8e6a57hUAAAAC/loading-forever-12years-later.gif" 
                    alt="Loading Forever 12years Later GIF - Loading Forever 12years Later GIFs"
                />
            {/* <Lottie
                options = {defaultOptions}
                width = {400}
                height = {400}
            /> */}
                
        </LoadContainer>
    )
}

export default Loader;