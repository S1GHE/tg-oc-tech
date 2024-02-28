import {Route, Routes} from "react-router-dom";
import {PublicRoutes} from "src/app/router/paths.tsx";

export const RouterApp = () => {
    return (
        <Routes>
            {
                PublicRoutes.map(
                    (el) => <Route path={el.path} element={el.element} key={el.path}/>
                )
            }
        </Routes>
    );
};