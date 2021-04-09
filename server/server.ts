import dotenv from 'dotenv';
dotenv.config();

import { UserCtrl } from './controllers/UserController';
import express from 'express'
import { registerValidations } from './validation/registration';

import './core/db';


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', UserCtrl.index)
app.get('/users/:id', UserCtrl.show);

app.post('/users/registration', registerValidations, UserCtrl.create)
app.post('/auth/login', UserCtrl.afterLogin);


app.listen(process.env.PORT, (): void => {
    console.log('server runned');
    
})
