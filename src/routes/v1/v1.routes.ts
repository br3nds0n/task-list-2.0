import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import controller from '../../app/controller/TaskController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        controller,
      ],
    );

    return router;
  }
}

export default RoutesV1;
