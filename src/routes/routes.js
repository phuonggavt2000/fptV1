import path from "../ultis/path";
import {
    Camera,
    Internet,
    InternetTv,
    News,
    Public,
    Tv,
    Home,
    Register,
} from "../page/public";

const routes = [
    {
        path: path.CAMERA,
        component: Camera,
    },
    {
        path: path.HOME,
        component: Home,
    },
    {
        path: path.INTERNET,
        component: Internet,
    },
    {
        path: path.INTERNET_TV,
        component: InternetTv,
    },
    {
        path: path.NEWS,
        component: News,
    },
    {
        path: path.PUBLIC,
        component: Public,
    },
    {
        path: path.TV,
        component: Tv,
    },
    {
        path: path.HOME,
        component: Home,
    },
    {
        path: path.REGISTER,
        component: Register,
    },
];

export default routes;
