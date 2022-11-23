const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Alisson Vieira',
    email: 'alisson@email.com',
    phone: '12987654321',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
