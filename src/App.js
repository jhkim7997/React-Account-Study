//App.js
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
function App() {
  return (
    <div>
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

  </div>
  );
}

export default App;
