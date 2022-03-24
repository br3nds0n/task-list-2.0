import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import TaskController from '../../app/controller/TaskController';
import ProjectController from '../../app/controller/ProjectController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        TaskController,
        ProjectController,
      ],
    );

    return router;
  }
}

export default RoutesV1;
