//CustomerAdd.js
import React , {useState} from 'react';
import Axios from 'axios'; //post방식으로 데이터 전달을 위해

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; // 스타일 라이버러리

const styles = theme => ({
    hidden: {
     display: 'none'
    }
  })

function CustomerAdd(props){

    const [file,setFile] = useState(null); 
    const [userName,setUserName] = useState(""); 
    const [birthday,setBirthday] = useState(""); 
    const [gender,setGender] = useState(""); 
    const [job,setJob] = useState(""); 
    const [fileName,setFileName] = useState(""); 
    const [open,setOpen] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addCustomer()
        .then((response) => {
            console.log(response.data);
            props.onChangelist(); //App.js의 부모 함수 호출
        })
        setFile(null);
        setUserName("");
        setBirthday("");
        setGender("");
        setJob("");
        setFileName("");
        setOpen(false); //전송후 Modal창 닫기 속성 추가
    }

    const handleOpen = () => {
        setOpen(true); // Modal창 열기 속성 추가
    }

    const handleClose = () => {
        setFile(null);
        setUserName("");
        setBirthday("");
        setGender("");
        setJob("");
        setFileName("");
        setOpen(false);// Modal창 당기 속성 추가 및 useState변수 초기화
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleBirthday = (e) => {
        setBirthday(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleJob = (e) => {
        setJob(e.target.value);
    }

    const addCustomer = () => {
        const url = 'api/customers';
        const formData = new FormData();
        formData.append('image',file);
        formData.append('name',userName);
        formData.append('birthday',birthday);
        formData.append('gender',gender);
        formData.append('job',job);
        const config={
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        //axios post사용
        return Axios.post(url, formData,config);
    }
    const { classes } = props;
    return (
         /* open이 'true일때 보여짐' Dialog닫을때 handleClose함수가 실행된 */
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                고객 추가하기
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>고객추가</DialogTitle>
                <DialogContent>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file"  file={file} value={fileName} onChange={handleFileChange}/>
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {fileName === "" ? "프로필이미지 선택" : fileName}
                        </Button>
                    </label>
                    <br></br>
                    <TextField label="이름" type="text" name="userName"  value={userName} onChange={handleUserName}/><br></br>
                    <TextField label="생년월일" type="text" name="birthday"  value={birthday} onChange={handleBirthday}/><br></br>
                    <TextField label="성별" type="text" name="gender"  value={gender} onChange={handleGender}/><br></br>
                    <TextField label="직업" type="text" name="job"  value={job} onChange={handleJob}/><br></br>
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>추가</Button>
                <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
        /*
        <form onSubmit={handleFormSubmit}>
            <h1>고객추가</h1>
            프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange}/><br></br>
            이름: <input type="text" name="userName"  value={userName} onChange={handleUserName}/><br></br>
            생년월일: <input type="text" name="birthday"  value={birthday} onChange={handleBirthday}/><br></br>
            성별: <input type="text" name="gender"  value={gender} onChange={handleGender}/><br></br>
            직업: <input type="text" name="job"  value={job} onChange={handleJob}/><br></br>
            <button type="submit">추가하기</button>
        </form>
        */
    );

};

export default withStyles(styles)(CustomerAdd);