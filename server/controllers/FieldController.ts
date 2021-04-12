import express from 'express'
import {
  FieldModel,
  FieldModelInterface,
} from "../models/FieldModel";


class FieldsController {

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      
      const data: FieldModelInterface = {
        title: req.body.title,
        content: req.body.content,
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
}


export const FieldCtrl = new FieldsController();
