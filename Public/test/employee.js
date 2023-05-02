const Employee = require("./lib/Employee");

describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee("brandon", 954, "brandon@gmail.com");
  });

  test("create an employee object with criteria ", () => {
    expect(employee).toBeDefined();
    expect(typeof employee.name).toBe("string");
    expect(typeof employee.id).toBe("number");
    expect(typeof employee.email).toBe("string");
  });

  test("return the name of the employee", () => {
    expect(employee.getName()).toBe("brandon");
  });

  test("return the ID of the employee", () => {
    expect(employee.getId()).toBe(954);
  });

  test("return the email of the employee", () => {
    expect(employee.getEmail()).toContain(employee.email);
  });

    expect(employee.getRole()).toBe("Employee");
});