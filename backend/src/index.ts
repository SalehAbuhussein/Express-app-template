import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import session from 'express-session';
import morgan from 'morgan';
import helmet from 'helmet';

import { mongoConnect } from 'src/db/index';

const app = express();
const PORT = 80;

// Setting Security headers
app.use(helmet());

// logging http requests
app.use(morgan('dev'));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(cors());
app.use(session({
  secret: '4f9h8G2k1LzR',
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Add Routes Here

mongoConnect(() => app.listen(PORT));