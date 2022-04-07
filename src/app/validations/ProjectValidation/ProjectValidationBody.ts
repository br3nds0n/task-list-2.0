import Joi from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { Iproject } from '../../interfaces/project/Iproject';

class ValidationBodyProject implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void|Response> {
    try {
      const validation: Joi.ObjectSchema<Iproject> = Joi.object({
        title: Joi.string().min(5).max(20).trim()
          .required(),
        description: Joi.string().min(5).max(40).trim()
          .required(),
        tasks: Joi.string()
          .min(36)
          .max(36)
          .trim()
          .pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
          .required(),
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

export default ValidationBodyProject;
