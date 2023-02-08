//CustomerAdd.js
import React , {useState} from 'react';
import Axios from 'axios'; //post방식으로 데이터 전달을 위해

function CustomerAdd(){

    const [file,setFile] = useState(null); 
    const [userName,setUserName] = useState(""); 
    const [birthday,setBirthday] = useState(""); 
    const [gender,setGender] = useState(""); 
    const [job,setJob] = useState(""); 
    const [fileName,setFileName] = useState(""); 

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addCustomer()
        .then((response) => {
            console.log(response.data);
        })
    
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

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>고객추가</h1>
            프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange}/><br></br>
            이름: <input type="text" name="userName"  value={userName} onChange={handleUserName}/><br></br>
            생년월일: <input type="text" name="birthday"  value={birthday} onChange={handleBirthday}/><br></br>
            성별: <input type="text" name="gender"  value={gender} onChange={handleGender}/><br></br>
            직업: <input type="text" name="job"  value={job} onChange={handleJob}/><br></br>
            <button type="submit">추가하기</button>
        </form>
    );

};


export default CustomerAdd;