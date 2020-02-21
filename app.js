const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

require('dotenv').config();
require('./src/database/models');

const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(methodOverride());
app.use(express.static(`${__dirname}/public`));

app.use(
  session({
    secret: 'tbox-be',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }),
);



app.use(routes);


const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port ${server.address().port}`);
});
