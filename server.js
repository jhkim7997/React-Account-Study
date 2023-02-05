const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

//===================Mysql접속 ===================
const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host:conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();
//===================Mysql접속 ===================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/hello', (req, res) => {
  res.send('Hello World!')
})
//응답은 bodyParser.json()사용하여 알아서 json형태로 전달하게 만들었다.
app.get('/api/customer', (req, res) => {
  //for(let i=0; i < 9999999999; i++){} //생각하는 시간
  // 쿼리로 데이터 접속하기
  connection.query(
    "select * from customer",
    (err,rows,fields) =>{
      res.send(rows);
    }
  );

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})