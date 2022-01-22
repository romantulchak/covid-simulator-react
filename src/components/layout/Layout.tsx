import {Link, Outlet} from "react-router-dom";
import {Header} from "../header/Header";

export const Layout = () => {
    return (
        <>
            <Header/>
            <div className={"container"}>
                <Outlet/>
            </div>
        </>
    )
}

