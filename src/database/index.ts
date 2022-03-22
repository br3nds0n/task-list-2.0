import { createConnection } from 'typeorm';

class Database {
  constructor() {
    this.connect();
  }

  private async connect(): Promise<void> {
    try {
      await createConnection();
      console.log('Connected to database');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Database();
