import { DataSource } from 'typeorm';
import { User } from '../users/user.model'; // Adjust the path if needed
import config from '../config.json'; // Assuming your config file is in the parent directory

const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.database,
  entities: [User],
  synchronize: true, // Set to false in production
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export { AppDataSource };