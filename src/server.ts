import 'dotenv/config';
import 'reflect-metadata';

import App from './App';
import { logger } from '../src/app/utils/log/logger';

App.listen(process.env.PORT, () => logger.info(`Server listening at http://localhost:${process.env.PORT}`));
