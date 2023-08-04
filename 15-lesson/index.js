class User {
  constructor(userName, email, password, membership) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.membership = membership;
  }
  register() {
    console.log(`${this.userName}ning elektron pochtasi ${this.email}`);
  }
}

let user = new User("Doston", "Doston@gmail.com");
user.register();

class ChildUser extends User {
  constructor(userName, email, password, membership, age, membership2) {
    super(userName, email, password, membership, age, membership2);
    this.age = age;
    this.membership2 = membership2;
  }

  getPackage() {
    (this.age > 25)
      ? console.log(`${this.userName} ${this.membership2} paketga azo bo'ldi`)
      : console.log(`${this.userName} ${this.membership} paketga azo bo'ldi`);
  }
}

let childuser = new ChildUser(
  "Doston",
  "Doston@gmail.com",
  12345,
  "standart",
  28,
  "universal"
);
childuser.getPackage()