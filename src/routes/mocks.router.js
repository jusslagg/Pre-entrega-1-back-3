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

import generateMockUsers from '../utils/mocking.js';
import User from '../dao/models/User.js';

router.post('/generateData', async (req, res) => {
  const { users } = req.body;

  const generatedUsers = generateMockUsers(users || 10);

  try {
    await User.insertMany(generatedUsers);
    res.json({
      status: 'success',
      message: `${generatedUsers.length} users generated and inserted into the database.`,
    });
  } catch (error) {
    console.error('Error al insertar usuarios en la base de datos:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error al insertar usuarios en la base de datos.',
    });
  }
});

export default router;