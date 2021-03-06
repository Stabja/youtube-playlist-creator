const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Import the routes
let channelRouter = require('./routes/channel.route');
let playlistRouter = require('./routes/playlist.route');

// Helper Functions
const {
  readCredentialsFromFile,
  deleteCredentialsIfExpired
} = require('./utils/globalUtils');


const checkIfTokenExistInFile = async () => {
  try {
    const token = await readCredentialsFromFile();
    deleteCredentialsIfExpired(token);
  } catch(err) {
    console.log(`${err}`.red );
  }
};

checkIfTokenExistInFile();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, '../my-app/build')));

// Assign Routes
app.use('/channels', channelRouter);
app.use('/playlists', playlistRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('404 Error'.red);
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3080, () => {
  console.log('Server Running in port 3080.');
});

//module.exports = app;