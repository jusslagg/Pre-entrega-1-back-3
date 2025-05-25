import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Mocks router working!');
});

router.get('/mockingpets', (req, res) => {
  const mockPet = {
    name: 'MockPet',
    species: 'Dog',
    age: 3,
  };
  res.json(mockPet);
});

import generateMockUsers from '../utils/mocking.js';

router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({
    status: 'success',
    payload: users,
  });
});

export default router;