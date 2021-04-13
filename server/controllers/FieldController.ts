import express from 'express'
import {
  FieldModel,
  FieldModelInterface,
} from "../models/FieldModel";


class FieldsController {

    // получаем все поля
    async getAll(_: any, res: express.Response): Promise<void> {
      try {
        const fields = await FieldModel.find();
          
        res.json({
          status: "success",
          data:fields,
        });
      } catch (error) {
        res.json({
          status: "error",
          errors: JSON.stringify(error),
        });
      }
    }
  

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {    
      const data: FieldModelInterface = {
        title: req.body.title,
        content: req.body.content,
        pictures: req.body.pictures,
      };
      
      let field = await FieldModel.create(data);
      res.status(200).json({
        status: "success",
        data: field,
      });
    } catch (error) {
      res.json({
        status: "error",
        errors: JSON.stringify(error),
      });
    }
  }
};

export const FieldCtrl = new FieldsController();
