import { DefaultLayout,Login,Register,AdminLayout  } from '~/layouts';
import config from '~/config';
import Header from '~/layouts/components/Header';
import Home from '~/Page/Home';
import CreatCar from '~/Page/admin/CreatCar';
import ListCar from '~/Page/admin/ListCar';
import Cookies from 'js-cookie';
import EditCar from '../Page/admin/EditCar';


// function isLoggedIn() {
//     return Cookies.get('token') !== undefined;
//   }
const publicRoutes = [
    { path: config.routers.Login,layout: Login },
    { path: config.routers.Rigister,layout: Register},
    { path: config.routers.Home, component: Home ,layout: DefaultLayout},
    
];
const privateRoutes = [
    { path: config.routers.ListCar, component:ListCar , layout: AdminLayout  },
    { path: config.routers.EditCar, component: EditCar ,layout: AdminLayout },
    { path: config.routers.CreateCar, component: CreatCar ,layout: AdminLayout},
]
export { publicRoutes, privateRoutes }