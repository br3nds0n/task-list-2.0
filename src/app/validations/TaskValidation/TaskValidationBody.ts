import joi from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { Itask } from '../../interfaces/task/Itask';

class ValidationBodyTask implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void|Response> {
    try {
      const validation: joi.ObjectSchema<Itask> = joi.object({
        title: joi.string().min(5).max(20).trim()
          .required(),
        taskRelevance: joi.number().min(1).max(10).required(),
        completed: joi.boolean().required(),
      });

      const { error } = await validation.validate(req.body, { abortEarly: true });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default ValidationBodyTask;
