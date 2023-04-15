import classNames from 'classnames/bind';
import config from '~/config';
import styles from './ListCar.module.scss';
import {TbEdit,TbPlayerTrackPrev,TbPlayerTrackNext}  from 'react-icons/tb';
import {MdDelete} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginate from '~/layouts/components/Paginate';
import { useDebounce } from '~/Hooks';
import { useDispatch, useSelector } from 'react-redux';
// import { addListCar,searchListCar } from '~/Redux/action'; 
import { searchitemSelector } from '~/Redux/selector';
import {exportToExcel } from '~/exel/exel';
import listscarSlice from '~/Redux/list/list';
import filterSlice from '~/Redux/filters/filters';
const cx = classNames.bind(styles);

function ListCar() {
    const [listCars,setListCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue,setSearchValue] = useState(" ");
  const [totalPages, setTotalPages] = useState(0);
  const debounced = useDebounce(searchValue, 700);
  const dispatch = useDispatch();
  const listcars = useSelector(searchitemSelector);
    useEffect(() => {
        axios.get(`/createCar?page=${currentPage}`)
        .then(res => {
        setListCars(res.data.docs);
        dispatch(listscarSlice.actions.addListcar( res.data.docs ));
        setTotalPages(res.data.total);
        })
        .catch((err) => {
            console.log(err);
        })
    },[currentPage]);
    const handleChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        
      };

    const handleDelete =  (id) => {
            axios.delete(`/admin/delete/${id}`)
            .then(res => {
                axios.get(`/createCar?page=${currentPage}`)
                .then(res => {
                    dispatch(listscarSlice.actions.addListcar( res.data.docs ));
                setTotalPages(res.data.total);
                })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const hanldeChange =  (e) => {
    const result =  e.target.value;
    setSearchValue(result);
    dispatch(filterSlice.actions.searchListcar(result));
    }

    const handleExel = () => {
        exportToExcel(listcars);
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>Danh sách ô tô</div>
              <div className={cx('headerItem')}>
                <div className={cx('btn')}>
                <Link to={config.routers.CreateCar} className={cx('btnImg')} >Thêm thông tin </Link>
                 </div>
            
                   <input type='text' onChange={hanldeChange}   className={cx('input')} />
                   <button onClick = {handleExel} className={cx('btnImg')}>Export to Excel</button>
                  </div>
              
                <div className={cx('content')}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Create Date</th>
                                <th>Price</th>
                                <th colSpan='2'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listcars.map((listcar,index) => (
                                
                            <tr className={cx('tableitem')} key={listcar._id}>
                                <td>{index + 1}</td>
                                <td>{listcar.name}</td>
                                <td>{listcar.year}</td>
                                <td>{listcar.createdAt}</td>
                                <td>{listcar.price}</td>
                                <td><Link to={`/admin/EditCar/${listcar._id}`} className={cx('edit')}><TbEdit /></Link></td>
                                <td><button onClick = {() => handleDelete(listcar._id)} className={cx('delete')}><MdDelete /></button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    <Paginate currentPage={currentPage} totalPages={totalPages} onChangePage={handleChange}/>
            </div>
        </div>
    );
}

export default ListCar;
