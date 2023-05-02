const Intern = require("../lib/intern");

describe("Intern", () => {
  let intern;

  beforeEach(() => {
    intern = new Intern("Brandon", "954", "brandon@gmail.com", "UCF");
  });

  test("create an intern object with criteria", () => {
    expect(intern).toBeDefined();
    expect(typeof intern.name).toBe("Brandon");
    expect(typeof intern.id).toBe("954");
    expect(typeof intern.email).toBe("brandon@gmail.com");
    expect(typeof intern.school).toBe("UCF");
  });

  test("return the name of the intern", () => {
    expect(typeof intern.getName()).toBe("Brandon");
  });

  test("return the ID of the intern", () => {
    expect(typeof intern.getId()).toBe("954");
  });

  test("return the email of the intern", () => {
    expect(typeof intern.getEmail()).toBe("brandon@gmail.com");
  });

  test("return the school name of the intern", () => {
    expect(typeof intern.getSchool()).toBe("UCF");
  });

  test("return the role of the intern", () => {
    expect(typeof intern.getRole()).toBe("intern");
  });
});
