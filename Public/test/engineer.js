const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer('brandon', 954, 'brandon@gmail.com', 'brando');
  });

  test('check if the engineer object has correct property types', () => {
    expect(typeof engineer.name).toBe('string');
    expect(typeof engineer.id).toBe('number');
    expect(typeof engineer.email).toBe('string');
    expect(typeof engineer.githubUsername).toBe('string');
  });

  test('try to get the name method', () => {
    expect(engineer.getName()).toBe('brandon');
  });

  test('try to get the id method', () => {
    expect(engineer.getId()).toBe(954);
  });

  test('try to get the email from method', () => {
    expect(engineer.getEmail()).toBe('brandon@gmail.com');
  });

  test('try to get the github username method', () => {
    expect(engineer.getGithub()).toBe('brando');
  });

  test('try to get the role method', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});
