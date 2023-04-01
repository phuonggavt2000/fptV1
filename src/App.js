import { Route, Routes } from "react-router-dom";
import { Public } from "./page/public";
import path from "./ultis/path";
import routes from "./routes/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className=" h-screen select-none overflow-hidden relative z-[1] font-roboto">
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
