import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import __dirname from './utils.js';
import viewRouter from './routes/view.router.js'

const app = express();
const PORT = process.env.PORT || 9090;
const connection = mongoose.connect(process.env.MONGO_URL)
// const connection = mongoose.connect('mongodb+srv://admin:admin@cluster0.8hkzesl.mongodb.net/clase45-adoptme-deploy-dev?retryWrites=true&w=majority')

// Confi de handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/', viewRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
