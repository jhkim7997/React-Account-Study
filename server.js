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

//===================fileUpload ===================
const multer = require('multer'); //업로드 파일 이름을 자동으로 만들어준다.
const upload = multer({dest: './upload'}); //upload폴더 경로

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
    "select * from customer where isDeleted = 0",
    (err,rows,fields) =>{
      res.send(rows);
    }
  );

});


//사용자는 image경로로 접근을 하지만 실제로는 upload폴더이다. 
app.use('/image', express.static('./upload'));
// 이미지 업로드 및 데이터 베이스 insert
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?,NOW(),0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];

  console.log(name);

  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      //console.log(err);
      //console.log(rows);
    }
  );
});

// 데이터 베이스 delete
app.delete('/api/customers/:id',  (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted =1 WHERE id =?';
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      //console.log(err);
      //console.log(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})