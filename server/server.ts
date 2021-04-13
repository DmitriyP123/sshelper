import dotenv from 'dotenv';
dotenv.config();

import { RequestCtrl } from './controllers/RequestController'
import { EventCtrl } from './controllers/EventController'
import { FieldCtrl } from './controllers/FieldController'
import { UserCtrl } from './controllers/UserController';
import { MarkCtrl } from './controllers/MarksController'
import express from 'express'
import { registerValidations } from './validation/registration';

import './core/db';


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', UserCtrl.getAll)
app.get('/users/:id', UserCtrl.show);

app.post('/users/registration', registerValidations, UserCtrl.registration)
app.post('/users/login', UserCtrl.login);
app.post('/users/verify', UserCtrl.verify);

app.get('/marks', MarkCtrl.getAll)
app.post('/marks', MarkCtrl.create )
app.delete('/marks', MarkCtrl.delete )

app.get('/fields', FieldCtrl.getAll )
app.post('/field', FieldCtrl.create)

app.get('/events', EventCtrl.getAll)
app.post('/events', EventCtrl.create)

app.get('/requests', RequestCtrl.getAll)
app.post('/requests', RequestCtrl.create)
app.delete('/requests', RequestCtrl.delete)

app.listen(process.env.PORT, (): void => {
    console.log('server runned on: ',process.env.PORT);
    
})
