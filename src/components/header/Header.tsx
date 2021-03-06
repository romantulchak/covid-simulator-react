import {NavLink} from "react-router-dom";
import logo from '../../assets/image/logo.svg'
import "./Header.scss"

const setActive = ({isActive}: {isActive: boolean}) => (isActive ? "active" : "");
export const Header = () => {
    return (
        <header>
            <ul className={"links__list"}>
                <div className={"logo"}>
                    <li><img src={logo} alt={"logo"}/></li>
                </div>
                <div className={"links"}>
                    <li><NavLink className={setActive} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={setActive} to={"/simulation"}>Simulation</NavLink></li>
                    <li><NavLink className={setActive} to={"/statistic"}>Statistic</NavLink></li>
                    <li className="covid__link"><NavLink className={setActive} to={"/what-is-covid"}>What is
                        COVID-19?</NavLink></li>
                </div>
            </ul>
        </header>
    )
}