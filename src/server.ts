import 'reflect-metadata';
import 'dotenv/config';
import App from './App';

App.listen(process.env.PORT, () => console.log('application on port 3000'));
