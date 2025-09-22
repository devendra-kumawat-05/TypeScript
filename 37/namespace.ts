namespace UserNameSpace {
  export class Auth {
    login() {
      console.log("User Login Successfully");
    }
  }

  export function getList() {
    console.log("User List ");
  }
}

namespace AdminNameSpace {
  export class Auth {
    login() {
      console.log("Admin Login Successfully");
    }
  }

  export function getList() {
    console.log("Admin List ");
  }
}

let user12 = new UserNameSpace.Auth();
user12.login();

UserNameSpace.getList();
AdminNameSpace.getList();
