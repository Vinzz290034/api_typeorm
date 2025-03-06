import 'rootpath'; // Or remove if not needed
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errorHandler } from './_middleware/error-handler';
import { AppDataSource } from './_helpers/db';
import { usersController } from './users/users.controller';

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // ... rest of your server setup
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    // api routes
    app.use('/users', usersController);

    // global error handler
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      errorHandler(err, req, res, next);
    });

    // start server
    const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
    app.listen(port, () => console.log('Server listening on port ' + port));
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });