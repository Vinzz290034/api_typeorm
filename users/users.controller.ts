import express, { Request, Response, NextFunction } from 'express';
import { userService } from './user.service';

const router = express.Router();

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create); 

// ... other routes

// route functions
function getAll(req: Request, res: Response, next: NextFunction) {
  userService.create(req.body)
    .then(users => res.json(users))
    .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction) {
  userService.getById(Number(req.params.id))
    .then(user => res.json(user))
    .catch(next);
}

function create(req: Request, res: Response, next: NextFunction) {
  userService.create(req.body) 
    .then(() => res.json({ message: 'User created successfully' }))
    .catch(next);
}

// ... other route functions and schema functions

export const usersController = router;