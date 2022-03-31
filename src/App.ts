import express, { Express } from 'express';

import database from './database/index';
import routes from './routes/index';

class App {
  readonly express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  static async init() {
    const app = new App();
    await database.connect();

    return app.express;
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.express.use('/api', routes.index());
  }
}

export default App;
