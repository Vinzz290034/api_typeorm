import { AppDataSource } from '../_helpers/db';
import { User } from './user.model';

const userRepository = AppDataSource.getRepository(User);

export const userService = {
  getAll,
  getById,
  // ... other methods
};

async function getAll(): Promise<User[]> {
  return await userRepository.find();
}

async function getById(id: number): Promise<User | null> {
  return await userRepository.findOneBy({ id });
}

// ... other methods and getUser helper function