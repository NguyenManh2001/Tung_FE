import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import filterSlice from '~/Redux/filters/filters';
import { loginSelector } from '~/Redux/selector';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Login() {

    const [username,setUserName] = useState('');
    const [password,setPassWord] = useState('');
    const [ischeck,setIscheck] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
  const isAuthenticated = useSelector(loginSelector);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await axios.post('/login', { username, password })
        .then(response => {
            const token = response.data.token;
            const expires = new Date(Date.now() + 3600 * 1000);
            if(token){
                setIscheck(true);
                Cookies.set('token',token, { expires});
                dispatch(filterSlice.actions.login(Cookies.get('token')));
            }
            else{
                console.log('ban chua dang nhap');
            }
        })
        .catch(err =>{
          console.log('ban chua dang nhap');
        })
      };
      if(ischeck){
        navigate(config.routers.ListCar);
      };
    
      useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
          navigate(config.routers.ListCar);
        }
      }, [navigate]);
    
      
      const handleChange =  (e) => {
        e.preventDefault();
       if(!username.startsWith(' ')){
        setUserName(e.target.value);
        // if (username.trim() !== '') {
        setTimeout(() => {
         setUserName(prevEmail => prevEmail.endsWith('@gmail.com') ? prevEmail : `${prevEmail}@gmail.com`);
       }, 20000);
    //    }
       
    }
      };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>Login</div>
                    <div className={cx('Form')}>
                        <form>
                            <div className={cx('formItem')}>
                                <div className={cx('Name')}>UserName:</div>
                                <input type="email" className={cx('input')} value={username} onChange={handleChange}  />
                            </div>
                            <div className={cx('formItem')}>
                                <div className={cx('Name')}>PassWord:</div>
                                <input type="text" value={password} onChange={(e) => setPassWord(e.target.value)} className={cx('input1')} />
                            </div>
                            <div className={cx('submit')}>
                                <div className={cx('btn')}>
                                    <button onClick={handleSubmit} className={cx('btnLogin')}>Login</button>
                                </div>
                            </div>
                            <div className={cx('register')}>
                                <span>Bạn chưa có tài khoản?  </span>
                                <a className={cx('linkRegister')} href={config.routers.Rigister}>Đăng ký ngay</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
