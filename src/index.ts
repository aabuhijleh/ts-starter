import UserPool from "./Models/UserPool";

UserPool.addUser({ id: 1, address: "hello", isConnected: false });

console.log(UserPool.getUserById(1));

UserPool.updateUser(1, { isConnected: true });

console.log(UserPool.getUserById(1));
