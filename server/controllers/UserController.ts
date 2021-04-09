import express from "express";
import jwt from "jsonwebtoken";

import {
  UserModel,
  UserModelInterface,
} from "../models/UserModel";
import { validationResult } from "express-validator";
import { bcryptHash } from "../utils/generateHash";
import bcrypt from 'bcryptjs' 
import { isValidObjectId } from "../utils/isValidObjectId";

class UserController {
  // полчучаем всех пользователей
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find();

      res.json({
        status: "success",
        data: users,
      });
    } catch (error) {
      res.json({
        status: "error",
        errors: JSON.stringify(error),
      });
    }
  }

  /// Конкретный пользователь
  async show(req: any, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;

      if (!isValidObjectId(userId)) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        res.status(404).send();
        return;
      }

      res.json({
        status: "success",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  // Создаем подьзователя (при регистрации)
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {     
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: "error", errors: errors.array() });
        return;
      }
      const data: UserModelInterface = {
        email: req.body.email,
        password: await bcryptHash(req.body.password),
      };

       let user = await UserModel.create(data);

      res.status(200).json({
        status: "success",
        data: user,
        token: jwt.sign(
          { data: user },
          process.env.SECRET_KEY || "123",
          {
            expiresIn: "30 days",
          }
        ),
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
        
      });
    }
  }
 // Логин, отдаем токен
  async afterLogin(req: express.Request, res: express.Response): Promise<void> {
    try {
        let user = await UserModel.findOne({email:req.body.email})
        if (user && await bcrypt.compare(req.body.password, user.password)) {
          res.json({
            status: "success",
            data: {
              ...user.toJSON(),
              token: jwt.sign(
                { data: req.body.user },
                process.env.SECRET_KEY || "123",
                {
                  expiresIn: "30 days",
                }
              ),
            },
          });
        } 
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
}

export const UserCtrl = new UserController();
