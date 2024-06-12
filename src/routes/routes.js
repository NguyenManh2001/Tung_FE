import { DefaultLayout, AdminLayout } from '~/layouts';
import config from '~/config';
import Header from '~/layouts/components/Header';
import Home from '~/Page/Home';
import CreatCar from '~/Page/admin/CreatCar';
import ListCar from '~/Page/admin/ListCar';
import Cookies from 'js-cookie';
import EditCar from '../Page/admin/EditCar';
import Login from '~/Page/Login';
import Register from '~/Page/Register';
import Information from '~/Page/Information';
import Forecast from '~/Page/Forecast';

// function isLoggedIn() {
//     return Cookies.get('token') !== undefined;
//   }
const publicRoutes = [
    { path: config.routers.Login, component: Login, layout: DefaultLayout },
    { path: config.routers.Rigister, component: Register, layout: DefaultLayout },
    { path: config.routers.Home, component: Home, layout: DefaultLayout },
    { path: config.routers.Forecast, component: Forecast, layout: DefaultLayout },
    { path: config.routers.Information, component: Information, layout: DefaultLayout },
];
const privateRoutes = [
    { path: config.routers.ListCar, component: ListCar, layout: AdminLayout },
    { path: config.routers.EditCar, component: EditCar, layout: AdminLayout },
    { path: config.routers.CreateCar, component: CreatCar, layout: AdminLayout },
];
export { publicRoutes, privateRoutes };
