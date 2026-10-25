export function createNewUser() {
  const unique = `${Date.now()}${Math.floor(Math.random() * 100000)}`;

  return {
    firstName: 'Alina',
    lastName: 'Test',
    dateOfBirth: '2000-01-01',

    country: 'KP',

    postalCode: '010000',
    houseNumber: '10',
    street: 'Test Street',
    city: 'Astana',
    state: 'Astana',

    phone: '77001234567',

    email: `alina.test.${unique}@example.com`,
    password: `Qa${unique}Z!9`,
  };
}