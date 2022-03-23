import 'dotenv/config';
import 'reflect-metadata';

import App from './App';

App.listen(process.env.PORT, () => console.log(`Server listening at http://localhost:${process.env.PORT}`));
