import { createConnection } from 'typeorm';
import { logger } from '../app/utils/log/logger';

class Database {
  static async connect(): Promise<void> {
    try {
      await createConnection();
      logger.info('Connected to database');
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;
