import 'dotenv/config';
import 'reflect-metadata';

import App from './App';
import { logger } from '../src/app/utils/log/logger';

async function server(): Promise<void> {
  const app = await App.init();

  app.listen(process.env.PORT, () => logger.info(`Server listening at http://localhost:${process.env.PORT}`));
}

server();
