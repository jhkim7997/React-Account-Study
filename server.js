const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
  res.send('Hello World!')
})
//응답은 bodyParser.json()사용하여 알아서 json형태로 전달하게 만들었다.
app.get('/api/customer', (req, res) => {
  //for(let i=0; i < 9999999999; i++){} //생각하는 시간

  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '김갑환',
      birthday: '989797',
      gender: '남자',
      job: '사범'
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '이정재',
      birthday: '559797',
      gender: '남자',
      job: '배우'
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '김사라',
      birthday: '779797',
      gender: '여자',
      job: '전도사'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})