import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {Main} from "./components/Main";
import {Statistic} from "./components/statistic/Statistic";
import {Simulation} from "./components/simulation/Simulation";
import {WhatIsCovid} from "./components/what-is-covid/WhatIsCovid";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={<Main/>}/>
                        <Route path={"statistic"} element={<Statistic/>}/>
                        <Route path={"simulation"} element={<Simulation/>}/>
                        <Route path={"what-is-covid"} element={<WhatIsCovid/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
