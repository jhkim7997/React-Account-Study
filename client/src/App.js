//App.js
import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles'; // 스타일 라이버러리

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import React, { useState, useEffect } from 'react';
import CustomerAdd from './components/CustomerAdd';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"

  },
  table: {
    minWidth: 1080
  }
})


function App(props) {

  //useState 사용하여 배열 선언
  const [customers, setCustomers] = useState("");

  //해당 서버에 접근해서 고객 정보를 customer에 담기 
  useEffect(() => {
    listSearch();
   
  }, []);

  //리스트 조회 API호출
  const listSearch = () => {
    const fetchData = async () => {
      const res = await fetch('/api/customer');
      const result = res.json();
      return result;
    }
    fetchData().then(res => setCustomers(res)
    );
    };
    


  //customer 객체를 생성 하여 prop값 전달
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? customers.map(c => {  //map을 이용해 배열의 값을 순차적으로 가져온다. 
              return <Customer
                key={c.id} //idx인덱스를 할당 해줘야 리액트에서는 경고가 뜨지 않음.
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />;
            }) : <TableRow>
              <TableCell colSpan="6" align='center'>
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>}

          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd onChangelist={listSearch()}/>
    </div>
  );
}

export default withStyles(styles)(App);
