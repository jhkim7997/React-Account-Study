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


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"

  },
  table:{
    minWidth: 1080
  }
})

//customer 객체를 생성 하여 prop값 전달
const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '김두환',
    birthday: '989797',
    gender: '남자',
    job: '건달'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이두봉',
    birthday: '559797',
    gender: '남자',
    job: '군인'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '이보희',
    birthday: '779797',
    gender: '여자',
    job: '간호사'
  }
]
function App(props) {
  const {classes} = props;
  return (
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
          {customers.map(c => {  //map을 이용해 배열의 값을 순차적으로 가져온다. 
            return <Customer
              key={c.id} //idx인덱스를 할당 해줘야 리액트에서는 경고가 뜨지 않음.
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />;
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
