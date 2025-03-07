import { AppDataSource } from '../_helpers/db';
import { User } from './user.entity';
import bcrypt from 'bcrypt';

const userRepository = AppDataSource.getRepository(User);

export const userService = {
  getAll,
  getById,
  create,
    // ... other methods
  };
  
  async function create(user: any): Promise<User> {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    
      const newUser = userRepository.create({
        ...user,
        passwordHash: hashedPassword,
      });
    
      const savedUser = await userRepository.save(newUser);
      return Array.isArray(savedUser) ? savedUser[0] : savedUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

async function getAll(): Promise<User[]> {
  return await userRepository.find();
}

async function getById(id: number): Promise<User | null> {
  return await userRepository.findOneBy({ id });
}

// ... other methods and getUser helper function
