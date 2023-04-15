import classNames from "classnames/bind";
import styles from "./CreatCar.module.scss";
import React, { useRef, useState,useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link, useNavigate } from "react-router-dom";
import config from "~/config";
import { BiImage } from 'react-icons/bi';
const cx = classNames.bind(styles);
function CreatCar() {
   const input1Ref = useRef(null);
   const input2Ref = useRef(null);
  const input3Ref = useRef(null);

   const [name,setName] = useState('');
   const [year,setYear] = useState('');
   const [price,setPrice] = useState('');
   const [automatic,setAutomatic] = useState('');
   const [petrol,setPetrol] = useState('');
   const [frontWheelDrive,setFrontWheelDrive] = useState('');
   const navigate = useNavigate();
   const [image, setImage] = useState('');

   console.log(image);
   
   const handleDrop = (e) => {
      const files = e.target.files[0];
      const images = URL.createObjectURL(files);
      setImage(images)
  };
  const handleSubmit = async (e) => {
   e.preventDefault();
    
   const response = await axios.post('/createCar', {name, year,price,automatic,petrol,frontWheelDrive,image })
   .then(response => {
      toast.success(response.data, {
         position: "top-right",
         height:"50px",
         autoClose: 5000, // Tự động đóng sau 3 giây
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
       navigate(config.routers.ListCar);
   })
   .catch(err => {
      console.log('loi');
   })
  }
    return ( 

        <div className = {cx("wrapper")}>
           <div className = {cx("container")}>
           <div className = {cx("header")}>
                Thêm thông tin ô tô
          </div>
          <div className={cx('content')}>
            <div className={cx('contentLeft')}>
            <div className={cx('left')}> 
               <img src={image} alt="uploaded" style={{ width: '100%', height: '100%' }} />
               <input type='file' id='file-upload' className={cx('inputchoose')} value='' accept="image/*" onChange={handleDrop} />
               <div className={cx('tille')}>
               <label htmlFor="file-upload" className={cx('lables')}>
            <BiImage className={cx('iconImage')} />
</label>
                 </div>
                 </div>
            </div>
            <div className={cx('contentRight')}>
               <form >
               <div className={cx('right')}>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Name</div>
                   <input type='text' value={name} onChange={(e) => setName(e.target.value)}  className={cx('input')} />
                  </div>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Year</div>
                   <input type='text'value={year} onChange={(e) => setYear(e.target.value)} className={cx('input')} />
                  </div>
               </div>
               <div className={cx('right')}>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Automatic</div>
                   <input type='text' value={automatic} onChange={(e) => setAutomatic(e.target.value)}  className={cx('input')} />
                  </div>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Petrol</div>
                   <input type='text' value={petrol} onChange={(e) => setPetrol(e.target.value)} className={cx('input')} />
                  </div>
               </div>
               <div className={cx('right')}>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Front Wheel Drive</div>
                   <input type='text' value={frontWheelDrive} onChange={(e) => setFrontWheelDrive(e.target.value)} className={cx('input')} />
                  </div>
                  <div className={cx('text')}>
                   <div className={cx('name')}>Price</div>
                   <input type='text'value={price} onChange={(e) => setPrice(e.target.value)} className={cx('input')} />
                  </div>
               </div>
               <div className={cx('btnCar')}>
                  <Link to={config.routers.ListCar} className={cx('btnhuy')} >Hủy</Link>
                  <button onClick={handleSubmit} className={cx('btnAdd')} >Lưu</button>
                 </div>
                 </form>
            </div>
          </div>
          <ToastContainer />
           </div>
        </div>
     );
}

export default CreatCar;