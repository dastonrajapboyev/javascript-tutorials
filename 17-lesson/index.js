// oop class inheritance

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  register() {
    console.log(`${this.userName} successfully registered`);
  }
}

let user = new User("doston", "test.gmali.com", 12345);

console.log(user instanceof User);

// =============================

// inheritance

class User2 extends User {
  constructor(userName, email, password, membership) {
    super(userName, email, password);
    this.membership = membership;
  }

  getPackage() {
    console.log(`${this.userName} ${this.membership} got his package`);
  }
}

let child = new User2("doston", "test.gmali.com", 12345, "vip");
User2.getPackage
console.log(child);