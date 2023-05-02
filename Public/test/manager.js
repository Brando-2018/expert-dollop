const Manager = require('../lib/manager');

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager('brandon', '954', 'brandon@gmail.com', '305');
  });

  test('check if the manager object has correct property types', () => {
    expect(typeof manager.name).toBe('string');
    expect(typeof manager.id).toBe('string');
    expect(typeof manager.email).toBe('string');
    expect(typeof manager.officeNumber).toBe('string');
  });

  test('try to get the name method', () => {
    expect(manager.getName()).toBe('brandon');
  });

  test('try to get the id method', () => {
    expect(manager.getId()).toBe('954');
  });

  test('try to get the email from method', () => {
    expect(manager.getEmail()).toBe('brandon@gmail.com');
  });

  test('try to get the office number method', () => {
    expect(manager.getOfficeNumber()).toBe('305');
  });

  test('try to get the role method', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});
