import express, { Express } from 'express';

import './database/index';
import routes from './routes/index';

class App {
  readonly express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.express.use('/api', routes.index());
  }
}

export default new App().express;
