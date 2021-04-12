import express from 'express'
import {
  EventModel,
  EventModelInterface,
} from "../models/EventModel";


class EventsController {

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      
      const data: EventModelInterface = {
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        date: req.body.date,
        content: req.body.content,
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
