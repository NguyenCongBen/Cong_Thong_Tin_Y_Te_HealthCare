var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var benhnhanRouter = require('./routes/benhnhan');
var bacsiRouter = require('./routes/bacsi');

var app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'duan'
});

db.connect(err => {
  if (err) throw err; 
  console.log("Đã kết nối thành công với database");
});

// Gán kết nối DB vào req
app.use((req, res, next) => {
  req.db = db;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/doctor', bacsiRouter);
app.use('/patient', benhnhanRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Xuất app để sử dụng trong server.js hoặc nơi khác
module.exports = app;
