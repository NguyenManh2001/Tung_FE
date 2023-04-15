import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Rigister.module.scss';

const cx = classNames.bind(styles);

function Rigister() {

    const [username,setUserName] = useState('');
    const [password,setPassWord] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await axios.post('/register', { username, password })
        .then(response => {
            const token = response.data.token
            Cookies.set('token',token, { expires: 7 });
            if(token){
                navigate(config.routers.Login);
            }
            else{
                console.log('ban chua dang ki');
            }
        })
        .catch(err =>{
          console.log('ban chua dang nhap');
        })
      };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>Register</div>
                    <div className={cx('Form')}>
                        <form>
                            <div className={cx('formItem')}>
                                <div className={cx('Name')}>UserName:</div>
                                <input className={cx('input')} value={username} onChange={(e) => setUserName(e.target.value)} type="email" />
                            </div>
                            <div className={cx('formItem')}>
                                <div className={cx('Name')}>PassWord:</div>
                                <input type="text" value={password} onChange={(e) => setPassWord(e.target.value)} className={cx('input1')} />
                            </div>
                            <div className={cx('submit')}>
                                <div className={cx('btn')}>
                                    <button onClick={handleSubmit} className={cx('btnLogin')}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rigister;
