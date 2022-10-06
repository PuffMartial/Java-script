// Polymorphism
// OVERRIDING - name of the function is the same, parameters are the same, and body is different
// OVERLOADING - name being the same, and the paramaters are different, body is different

class Person {
    constructor(id, name, age, email) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    showDetails() {
      return `
    ID: ${this.id}
    Name: ${this.name},
    Age: ${this.age}
    Email: ${this.email}
    `;
    }
    showDetails(test1, test2) {}
}

class Student extends Person {
  constructor(id, name, age, email, subjects) {
    super(id, name, age, email);
    this.subjects = subjects;
  }

  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
    console.log(this.subjects);
  }

  showDetails() {
    console.log(`
  ${this.name} is a student
  
  Person Details:
  ${super.showDetails()}
  Subjects: ${this.subjects}
    `);
  }
}

class Teacher extends Person {
  constructor(id, name, age, email, subjects) {
    super(id, name, age, email);
    this.subjects = subjects;
  }

  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
    console.log(this.subjects);
  }
}

class Parent extends Person {
  constructor(id, name, age, email) {
    super(id, name, age, email);
  }
}

const akhil = new Student(1, "akhil", 23, "akhil1234mara@gmail.com", ["Math"]);
const parent = new Parent(1, "Parent", 50, "parent@gmail.com");
akhil.showDetails();
// parent.showDetails();
