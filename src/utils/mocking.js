import bcrypt from 'bcrypt';

const generateMockUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const hashedPassword = bcrypt.hashSync('coder123', 10);
    const user = {
      id: i + 1,
      name: 'Mock User',
      email: 'mock@example.com',
      password: hashedPassword,
      role: Math.random() < 0.5 ? 'user' : 'admin',
      pets: [],
    };
    users.push(user);
  }
  return users;
};

export default generateMockUsers;