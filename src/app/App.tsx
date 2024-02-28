import "src/app/style/index.scss";
import {BrowserRouter} from "react-router-dom";
import {RouterApp} from "src/app/router/RouterApp.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <RouterApp/>
        </BrowserRouter>
    );
};