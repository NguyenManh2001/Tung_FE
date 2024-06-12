import classNames from 'classnames/bind';
import styles from './Forecast.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function Home() {
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const [imgPreview, setImgPreview] = useState();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'application/pdf': [],
        },
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
            URL.revokeObjectURL(imgPreview);
            setImgPreview(URL.createObjectURL(acceptedFiles[0]));
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('header')}>Kết quả dự đoán</div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('header')}>Dự đoán khả năng mắc bệnh ung thư</div>
                    <div className={cx('table')}>
                        <div
                            {...getRootProps()}
                            style={{
                                border: '2px dashed #eee',
                                padding: '20px',
                                textAlign: 'center',
                                width: '100%',
                            }}
                        >
                            <input {...getInputProps()} />
                            {file ? file.name : 'Drag and drop image here or upload from device'}
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <Button type="primary">Primary Button</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
