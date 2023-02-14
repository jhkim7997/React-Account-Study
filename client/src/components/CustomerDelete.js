//CustomerDelete.js
import React , {useState} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

function CustomerDelete({onChangelist,delId}){
    const [open,setOpen] = useState(false); // 모달창 열기닫기 useState속성
    
    const handleOpen = () => {
        setOpen(true); // Modal창 열기 속성 추가
    }

    const handleClose = () => {
        setOpen(false);// Modal창 당기 속성 추가 및 useState변수 초기화
    }

    const deleteCustomer = (id) => {
        const url = '/api/customers/'+id;
        fetch(url,{
            method: 'DELETE'
        });
        //console.log("delId:",delId);    <Button variant="contained" color="secondary" onClick={(e) => {deleteCustomer(delId)}}>삭제하기</Button>
        onChangelist(); //App.js의 부모 함수 호출
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen}>삭제</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle onClose={handleClose}>
                삭제 경고
            </DialogTitle>
            <DialogContent>
                <Typography gutterBottom>
                    선택한 공객 정보가 삭제됩니다.
                </Typography>
            </DialogContent>
            <DialogActions>
                 <Button variant="contained" color="primary" onClick={(e) => {deleteCustomer(delId)}}>삭제</Button>
                 <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
            </DialogActions>
        </Dialog>
        </div>
    );

};

export default CustomerDelete;