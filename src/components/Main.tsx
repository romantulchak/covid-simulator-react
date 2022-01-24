import video from "../assets/video/covid-bg.mp4";
import "./Main.scss";
import {NavLink} from "react-router-dom";

export const Main = () => {

    return (
        <section>
            <video className="bg__video" autoPlay={true} loop={true} muted={true}>
                <source src={video} type="video/mp4"/>
            </video>
            <svg className="animated__icon" viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
                <NavLink to={"what-is-covid"}>
                    <path fill="#fff"
                          d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                          mask="url(#knockout-text)">
                    </path>
                </NavLink>
                <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0"/>
                    <text x="130" y="218">What is COVID-19?</text>
                </mask>
            </svg>
        </section>
    )
}