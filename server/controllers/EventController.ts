import express from 'express'
import {
  EventModel,
  EventModelInterface,
} from "../models/EventModel";


class EventsController {

   // получаем все ивенты
   async getAll(_: any, res: express.Response): Promise<void> {
    try {
      const events = await EventModel.find();

      res.json({
        status: "success",
        data:events,
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
      
      const data: EventModelInterface = {
        title: req.body.title,
        content: req.body.content,
        start: req.body.start,
        date: req.body.date,
      };

      let event = await EventModel.create(data);
  
      res.status(200).json({
        status: "success",
        data: event,
      });
    } catch (error) {
      res.json({
        status: "error",
        errors: JSON.stringify(error),
      });
    }
  }

}


export const EventCtrl = new EventsController();
