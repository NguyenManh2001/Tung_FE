
import {Fragment} from 'react';
import{BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '~/routes'
import { DefaultLayout } from '~/layouts';
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { loginSelector } from './Redux/selector';
function App() {
  const isAuthenticated = useSelector(loginSelector);
  console.log(isAuthenticated);
    const token = Cookies.get('token');
    console.log(token);
  return (
    <Router>
      <div className="App">
          <Routes>
           {publicRoutes.map((router,index) => {
             const Page = router.component;
             let Layout = DefaultLayout;
             if(router.layout){
               Layout = router.layout;
             } else if(router.layout === null){
                Layout = Fragment;
             }
               return (<Route key={index} path={router.path} element={<Layout><Page /></Layout>} />);
           })}
          </Routes>
          <Routes>
           {privateRoutes.map((router,index) => {
             const Page = router.component;
             let Layout = DefaultLayout;
             if(router.layout){
               Layout = router.layout;
             } else if(router.layout === null){
                Layout = Fragment;
             }
               return (<Route key={index} path={router.path} element={token != undefined ? <Layout><Page /></Layout> : <Navigate to="/login" />} />);
           })}
          </Routes>
      </div>
    </Router>
      );
}

export default App;
